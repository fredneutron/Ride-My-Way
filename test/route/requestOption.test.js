import request from 'supertest';
import chai from 'chai';
import app from '../../index';
import user from '../../route/user';

const expect = chai.expect;
const assert = chai.assert;

describe('request decision [Accept or Reject]', () => {
  it('should return an error without a token', (done) => {
    request(app.use(user))
      .put('/users/rides/4/requests/1')
      .send({ request_option: 'Accept' })
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.be.equal(401);
        assert.typeOf(res.body, 'object');
        done();
      });
  });
});
