import request from 'supertest';
import chai from 'chai';
import app from '../../index';
import user from '../../route/user';

const expect = chai.expect;

describe('user login', () => {
  it('authorization should failed with invalid credentials', (done) => {
    request(app.use(user)).post('/authusers', (req, res) => {
      req.body = {
        email: 'bitbucket05@github.com',
        password: 'Password34',
      };
    })
      .set('Accept', 'application/json').expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(401);
        expect(res.body.message).to.be.equal('Auth failed');
      });
    done();
  });
});
