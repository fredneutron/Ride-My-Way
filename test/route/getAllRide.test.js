import request from 'supertest';
import chai from 'chai';
import app from '../../index';
import ride from '../../route/ride';

const expect = chai.expect;
const assert = chai.assert;

describe('get all rides', () => {
  it('should return all rides', (done) => {
    request(app.use(ride))
      .get('/rides')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        assert.typeOf(res.body, 'array');
        done();
      });
  });
});