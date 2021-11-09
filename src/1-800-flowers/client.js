'use strict';

const faker = require('faker');

const Queue = require('./util/queue');
const companyID = '1-800-flowers';
const queue = new Queue(companyID);

queue.subscribe('delivered', (payload) => {
  console.log('Flowers Were Delivered', payload.code);
});

queue.subscribe('in-transit', (payload) => { });

queue.trigger('getall', 'delivered');
