import request from 'supertest';
import chai from 'chai';
import app from '../../index';
import user from '../../route/user';

const expect = chai.expect;

describe('user signup', () => {
  it('should return error if request body is empty', (done) => {
    request(app.use(user)).post('/users')
      .set('Accept', 'application/json').expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body).to.not.undefined;
        done();
      });
  });
});