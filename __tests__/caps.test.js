'use strict';

const events = require('../src/event-pool');
const faker = require('faker');
const { event } = require('../caps');
const { handleDelivery } = require('../src/utils/vendor');
// const { handleDelivery } = require('../src/utils/vendor');
// const { handleDelivery } = require('../src/utils/driver');
require('../src/utils/driver')

let consoleSpy;
let mockPayload;

beforeEach(() => {
  consoleSpy = jest.spyOn(console, 'log').mockImplementation()
  mockPayload = {
    store: faker.company.companyName(),
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress()
  }
});

afterEach(() => {
  consoleSpy.mockRestore();
})

describe('CAPS test', () => {

  it('consoles the pickup order ID', () => {
    events.emit('pickup', mockPayload)
    // handleDelivery(mockPayload)
    expect(consoleSpy).toHaveBeenCalledWith(`DRIVER: picked up ${mockPayload.orderID}`);
  })

  it('consoles in-transit order ID', () => {
    events.emit('in-transit', mockPayload)
    expect(consoleSpy).toHaveBeenCalledWith(`EVENT, ${mockPayload}`)
  });

});
