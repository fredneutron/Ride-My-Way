import request from 'supertest';
import chai from 'chai';
import app from '../../index';
import user from '../../route/user';

const expect = chai.expect;

describe('user signup', () => {
  it('should add a new user', (done) => {
    request(app.use(user)).post('/users', (req, res) => {
      req.body = {
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
      };
    })
      .set('Accept', 'application/json').expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.not.undefined;
        done();
      });
  });
});