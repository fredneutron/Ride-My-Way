import request from 'supertest';
import chai from 'chai';
import app from '../../index';
import user from '../../route/user';
import driver from '../../route/driver';


const expect = chai.expect;


describe('get all users', () => {
  it('should return all users', (done) => {
    request(app.use(user)).get('/users')
      .set('Accept', 'application/json').expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

describe('get a user', () => {
  it('should return one user', (done) => {
    request(app.use(driver)).get('/drivers/')
      .set('Accept', 'application/json').expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.ok;
        done();
      });
  });
});
