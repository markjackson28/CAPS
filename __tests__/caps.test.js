'use strict';

const events = require('../src/event-pool');
const faker = require('faker');
const { event } = require('../src/caps');
const { handleDelivery } = require('../src/utils/driver');

let consoleSpy;
let mockPayload;

beforeEach(() => {
  consoleSpy = jestspyOn(console, 'log').mockImplementation()
  mockPayload = {
    store: faker.company.companyName(),
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress()
  }
});

describe('CAPS test', () => {

  

});
