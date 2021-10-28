'use strict';

const events = require('./event-pool');
require('./utils/vendor');
require('./utils/driver');

events.on('pickup', (payload) => event('pickup', payload));
events.on('in-transit', (payload) => event('in-transit', payload));
events.on('delivered', (payload) => event('delivered', payload));

function event(event, payload) {
  let time = new Date();
  console.log('EVENT', {event, time, payload});
}




