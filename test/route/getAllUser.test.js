import request from 'supertest';
import chai from 'chai';
import app from '../../index';
import ride from '../../route/ride';

const expect = chai.expect;
const assert = chai.assert;
describe('get all user', () => {
  it('should return a json of all users', (done) => {
    request(app.use(ride))
      .get('/users')
      .end((err, res) => {
        expect(res.status).to.equal(401);
        assert.typeOf(res.body, 'object');
        done();
      });
  });
});
