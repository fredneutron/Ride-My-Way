import request from 'supertest';
import chai from 'chai';
import app from '../../index';
import ride from '../../route/ride';

const expect = chai.expect;

describe('search for a ride', () => {
  it('should return a ride', (done) => {
    request(app.use(ride)).post('/rideSearch',(req,res) => {
      req.body = {
        destination: 'Lekki',
      }
    })
      .set('Accept', 'application/json').expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.ok;
        done();
      });
  });
});
