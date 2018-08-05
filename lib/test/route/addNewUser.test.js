import request from 'supertest';
import chai from 'chai';
import app from '../../index';
import user from '../../route/user';

const expect = chai.expect;
const assert = chai.assert;

describe('user signup', () => {
  const data = {
    firstname: 'Andela',
    lastname: 'Bootcamp',
    dob: '25/05/1992',
    gender: 'Male',
    picture: '',
    email: 'bitbucket05@github.com',
    password: 'Password34',
    vehicleType: 'Toyota Carolla',
    vehicleModel: '2018',
    driverLn: 'DFBHS34GHV34',
    VRN: '43G-DB5',
  }
  it('should return error if user already exist', (done) => {
    request(app.use(user))
      .post('/auth/signup')
      .send(data)
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(409);
        assert.typeOf(res.body, 'object');
        done();
      });
  });
});
