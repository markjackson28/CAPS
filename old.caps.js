'use strict';

const events = require('./src/event-pool');
// the events in here get loaded first
require('./src/modules/vendor');
require('./src/modules/driver');

// event listeners
events.on('pickup', (payload) => event('pickup', payload));
events.on('in-transit', (payload) => event('in-transit', payload));
events.on('delivered', (payload) => event('delivered', payload));

// this consoles the events 
function event(event, payload) {
  let time = new Date();
  console.log('EVENT', {event, time, payload});
}

module.exports = { event }
