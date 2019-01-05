import jwt from 'jsonwebtoken';

export default class helper {
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
      process.env.JWT_KEY,
      {
        expiresIn: '1d',
      },
    );
  }
}
