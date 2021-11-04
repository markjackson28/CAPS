'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000/caps');

socket.on('thank-you', (payload) => {
  console.log(`VENDOR: Thank you for delivering ${payload.orderID}`)
});
