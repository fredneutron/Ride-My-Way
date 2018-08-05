import request from 'supertest';
import chai from 'chai';
import app from '../../index';
import ride from '../../route/ride';

const expect = chai.expect;
const assert = chai.assert;

describe('add a ride offer', () => {
  const data = {
    location: "Victoria Island",
    destination: "Ajah",
    date: "23/04/2018",
    time: "15:30",
    prize: "4600",
    seat: "4",
    creator_id: "6",
  };
  it('should return error 400 without token', (done) => {
    request(app.use(ride))
      .post('/users/rides')
      .set('Accept', 'application/json')
      .send(data)
      .end((err, res) => {
        expect(res.status).to.be.equal(401);
        assert.typeOf(res.body, 'object');
        done();
      });
  });
});
