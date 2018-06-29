import request from 'supertest';
import chai from 'chai';
import app from '../../index';
import user from '../../route/user';

const expect = chai.expect;

describe('add a ride offer', () => {
  it('should add a new ride offer', (done) => {
    request(app.use(user)).post('/rides', (req, res) => {
      req.body = {
        location: 'Lekki',
        destination: 'Ikorodu',
        date: '23/04/2018',
        time: '15:30',
        prize: '5600',
        creator_id: '4'
      };
    })
      .set('Accept', 'application/json').expect(200)
      .end((err, res) => {
        expect(res.body).to.not.undefined;
        done();
      });
  });
});