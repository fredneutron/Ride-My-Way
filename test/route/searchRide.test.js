import request from 'supertest';
import chai from 'chai';
import app from '../../index';
import ride from '../../route/ride';

const expect = chai.expect;
const assert = chai.assert;

describe('search for a ride', () => {
  const data = {
    destination: 'Lekki',
    location: 'Ikorodu',
  };
  it('should return a json payload of rides', (done) => {
    request(app.use(ride))
      .post('/search')
      .send(data)
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        assert.typeOf(res.body, 'object');
        done();
      });
  });
});
