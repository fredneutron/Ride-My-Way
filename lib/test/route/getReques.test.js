import request from 'supertest';
import chai from 'chai';
import app from '../../index';
import user from '../../route/user';

const expect = chai.expect;

describe('get all ride request for a ride offer', () => {
  it('should return all ride request', (done) => {
    request(app.use(user)).get('/users/rides/5/request')
      .set('Accept', 'application/json').expect(200)
      .end((err, res) => {
        expect(res.body).to.not.undefined;
        done();
      });
  });
});
