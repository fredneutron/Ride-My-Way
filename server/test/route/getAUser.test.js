import request from 'supertest';
import chai from 'chai';
import app from '../../index';
import user from '../../route/user';

const expect = chai.expect;

describe('get a user', () => {
  it('should return a user', (done) => {
    request(app.use(user)).get('/users/1')
      .set('Accept', 'application/json').expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.ok;
        done();
      });
  });
});