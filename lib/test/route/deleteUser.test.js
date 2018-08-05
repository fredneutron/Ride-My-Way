import request from 'supertest';
import chai from 'chai';
import app from '../../index';
import user from '../../route/user';

const expect = chai.expect;
const assert = chai.assert;

describe('delete a user', () => {
  it('should return error without a token', (done) => {
    request(app.use(user))
      .delete('/users/1')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(401);
        assert.typeOf(res.body, 'object');
        done();
      });
  });
});