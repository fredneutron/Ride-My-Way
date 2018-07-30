import request from 'supertest';
import chai from 'chai';
import app from '../../index';
import user from '../../route/user';

const expect = chai.expect;
const assert = chai.assert;

describe('user login', () => {
  it('authorization should pass with valid credentials', (done) => {
    request(app.use(user))
      .post('/auth/login')
      .send({
        email: 'bitbucket05@github.com',
        password: 'Password34',
      })
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        assert.isDefined(res.body.token);
      });
    done();
  });
});
