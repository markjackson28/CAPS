'use strict';

const io = require('socket.io')(3000);
io.on('connection', (socket) => {
  console.log('CORE', socket);
});

const caps = io.of('/caps');

caps.on('connection', (socket) => {
  console.log('Caps Connected', socket.id);

  // Joining the room
  socket.on('join', (room) => {
    console.log(`created as room ${room}`);
    socket.join(room);
  });

  // Pickup Event
  socket.on('pickup', (payload) => {
    logger('pickup', payload);
    caps.emit('pickup', payload);
  });
  // In-Transit Event
  socket.on('in-transit', (payload) => {
    logger('in-transit', payload);
    caps.emit('in-transit', payload);
  });
  // Delievered Event
  socket.on('delivered', (payload) => {
    logger('delivered', payload);
    caps.emit('delivered', payload);
  });
  // Vendor Thank you Event
  socket.on('thank-you', (payload) => {
    logger('thank-you', payload);
    caps.emit('thank-you', payload);
  });
});


// Logs Events
function logger(event, payload) {
  let time = new Date();
  console.log({ time, event, payload });
}
