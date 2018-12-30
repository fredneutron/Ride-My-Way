import jwt from 'jsonwebtoken';

export default class helper {
  static checkRequest(req) {
    const data = [req.params.rideId, req.body.passenger_id];
    const error = [
      'Error: parameter id can not be empty',
      'Error: passenger_id can not be empty'];
    for (let i = 0; i < data.length; i += 1) {
      if (data[i] === '') {
        return error[i];
      }
    }
    return true;
  }
  static checkRide(req) {
    const data = [
      req.body.location,
      req.body.destination,
      req.body.date,
      req.body.time,
      req.body.prize,
      req.body.creator_id,
      req.body.mtp];
    const error = ['Error: Location can not be empty', 'Error: destination can not be empty', 'Error: date can not be empty', 'Error: time can not be empty', 'Error: prize can not be empty', 'Error: creator_id can not be empty', 'Error: ride meeting point can not be empty'];
    for (let i = 0; i < data.length; i += 1) {
      if (typeof data[i] === 'undefined' && data[i] == null) {
        return error[i];
      }
    }
    return true;
  }
  static checkUser(req) {
    if (req.body === null) return false;
    const data = [
      req.body.firstname,
      req.body.lastname,
      req.body.dob,
      req.body.gender,
      req.body.email,
      req.body.password,
      req.body.vehicleType,
      req.body.vehicleModel,
      req.body.driverLn,
      req.body.VRN];
    const error = ['firstname can not be empty', 'lastname can not be empty', 'date of birth can not be empty', 'gender can not be empty', 'email can not be empty', 'password can not be empty', 'vehicle-type can not be empty', 'vehicle-model can not be empty', 'driver license can not be empty', 'VRN can not be empty'];
    for (let i = 0; i < data.length; i += 1) {
      if (typeof data[i] === 'undefined' && data[i] == null) {
        return error[i];
      }
    }
    return true;
  }
  static generateToken(db) {
    return jwt.sign(
      {
        id: db.id,
        email: db.user_email,
      },
      'Coolyet',
      {
        expiresIn: '1d',
      },
    );
  }
  static emptyChecker(word) {
    if (typeof word !== 'undefined' && word !== '') return true;
    return false;
  }
}
