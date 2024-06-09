import app from '../app';
import supertest from 'supertest';

const request = supertest(app);

describe('Test get /', () => {
  it('Gets / endpoint response', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
