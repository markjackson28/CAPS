'use strict';

const express = require('express');
const io = require('socket.io-client');
const faker = require('faker');
const router = express.Router();

const socket = io.connect('http://localhost:3000/caps');

let newOrder = {
  store: 'Oreos Hot Sauce',
  orderID: faker.datatype.uuid(),
  customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
  address: `${faker.address.cityName()}, ${faker.address.stateAbbr()}`
}

// Pickup route
router.post('/pickup', (req, res) => {
  if (JSON.stringify(req.body) === '{}') {
    req.body = newOrder;
  }
  socket.emit('pickup', req.body);
  socket.emit('join', req.body.store);
  res.status(200).send(`Scheduled delivery for order# ${JSON.stringify(req.body.orderID)}`);
});

// In-Transit route
router.post('/in-transit', (req, res) => {
  if (JSON.stringify(req.body) === '{}') {
    req.body = newOrder;
  }
  socket.emit('in-transit', req.body);
  // socket.emit('join', req.body.store);
  res.status(200).send(`In-transit for order# ${JSON.stringify(req.body.orderID)}`);
});

// Delivered route
router.post('/delivered', (req, res) => {
  if (JSON.stringify(req.body) === '{}') {
    req.body = newOrder;
  }
  socket.emit('delivered', req.body);
  // socket.emit('join', req.body.store);
  res.status(200).send(`Delivered order# ${JSON.stringify(req.body.orderID)}`);
});

module.exports = router;
