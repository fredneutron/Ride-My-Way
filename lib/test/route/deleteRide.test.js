import request from 'supertest';
import chai from 'chai';
import app from '../../index';
import ride from '../../route/ride';

const expect = chai.expect;
const assert = chai.assert;

describe('delete a ride', () => {
  it('should return error with a token', (done) => {
    request(app.use(ride))
      .delete('/rides/1')
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(401);
        assert.typeOf(res.body, 'object');
        done();
      });
  });
});