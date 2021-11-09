'use strict';

const io = require('socket.io-client');

class Queue {
  constructor(id) {
    this.id = id;
    this.socket = io.connect('http://localhost:3000');
  }

  trigger(event, payload) {
    this.socket.emit(event, { clientID: this.id, payload });
  }

  // higher order function (fn)
  subscribe(event, fn) {
    this.socket.emit('subscribed', { event, clientID: this.id });

    this.socket.on(event, data => {
      let { messageID, payload } = data;
      this.socket.emit('received', { messageID, event, clientID: this.id  });
      fn(payload);
    });
  }

}

module.exports = Queue;
