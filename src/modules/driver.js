
'use strict';

// Connecting to the socket.io as a client
const io = require('socket.io-client');
// Connection to the Hub
const socket = io.connect('http://localhost:3000/caps');

socket.on('pickup', (payload) => {
  console.log(`DRIVER: picked up ${payload.orderID}`);
});

socket.on('in-transit', (payload) => {
  console.log(`DRIVER: in-transit with ${payload.orderID}`);
});

socket.on('delivered', (payload) => {
  console.log(`DRIVER: delivered up ${payload.orderID}`);
  socket.emit('thank-you', payload);
});

