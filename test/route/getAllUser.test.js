import request from 'supertest';
import app from '../../index';
import user from '../../route/user';


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


