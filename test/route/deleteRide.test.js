import request from 'supertest';
import chai from 'chai';
import app from '../../index';
import ride from '../../route/ride';

const expect = chai.expect;

describe('delete a ride', () => {
  it('should delete a ride', (done) => {
    request(app.use(ride)).get('/rides/1')
      .set('Accept', 'application/json').expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.ok;
        done();
      });
  });
});