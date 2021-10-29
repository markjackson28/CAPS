'use strict';

const events = require('../event-pool');
const faker = require('faker');

setInterval(() => {
  let newOrder = {
    store: 'Oreos Hot Sauce',
    orderID: faker.datatype.uuid(),
    customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: `${faker.address.cityName()}, ${faker.address.stateAbbr()}`
  }
  events.emit('pickup', newOrder);
}, 5000);

// event listerner
events.on('delivered', handleDelivery);

function handleDelivery(payload) {
  console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
}
