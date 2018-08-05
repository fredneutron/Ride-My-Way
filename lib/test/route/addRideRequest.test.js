import request from 'supertest';
import chai from 'chai';
import app from '../../index';
import user from '../../route/user';

const expect = chai.expect;

describe('add a ride request', () => {
  it('should add a new ride request', (done) => {
    request(app.use(user)).post('/rides/1/request', (req) => {
      req.body = { passenger_id: 5 };
    })
      .set('Accept', 'application/json').expect(200)
      .end((err, res) => {
        expect(res.body).to.not.undefined;
        done();
      });
  });
});
