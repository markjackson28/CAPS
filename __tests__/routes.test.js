'use strict';

const { app } = require('../src/caps-api/caps');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('CAPS Routes', () => {

  it('should respond with 404', async () => {
    const response = await mockRequest.post('/oreo');
    expect(response.status).toBe(404);
  });

  it('should respond with 404 w/ bad method', async () => {
    const response = await mockRequest.get('/pickup');
    expect(response.status).toBe(404);
  });

  it('should respond with 200', async () => {
    const response = await mockRequest.post('/pickup');
    expect(response.status).toBe(200);
  });
  
  it('should respond with 200', async () => {
    const response = await mockRequest.post('/delivered');
    expect(response.status).toBe(200);
  });

  it('should respond with 200', async () => {
    const response = await mockRequest.post('/in-transit');
    expect(response.status).toBe(200);
  });

});
