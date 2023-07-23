import request from 'supertest';

import { server } from '../src';

const api = request(server.getApp());

describe('[ AUTH ]: Auth Test Suite', () => {
  test('1. should return 200 status code', async () => {
    const resp = await api.get('/v1/api/status').send();
    expect(resp.status).toBe(200);
  });
});
