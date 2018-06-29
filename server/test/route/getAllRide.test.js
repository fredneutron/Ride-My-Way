import request from 'supertest';
import chai from 'chai';
import app from '../../index';
import ride from '../../route/ride';

const expect = chai.expect;

describe('get all rides', () => {
  it('should return all rides', (done) => {
    request(app.use(ride)).get('/rides')
      .set('Accept', 'application/json').expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.not.undefined;
        done();
      });
  });
});