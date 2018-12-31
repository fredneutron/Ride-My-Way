import bcrypt from 'bcrypt';
import dbConnect from '../controllers/helper/dbConnect';
import helper from '../controllers/helper/index';

export default class user {
  static getAllUser(res) {
    dbConnect.connect();
    dbConnect.query('SELECT * FROM users', (err, result) => {
      if (result) return res.status(200).json(result.rows);
      if (err) return res.status(500).json(err);
    });
  }
  static getUser(r, res) {
    dbConnect.connect();
    dbConnect.query('SELECT * FROM users WHERE id = $1', [r], (err, result) => {
      if (result) return res.status(200).json(result.rows[0]);
      if (err) return res.status(404).json({ message: 'user not found' });
    });
  }
  static signUp(re, res) {
    let picture = '';
    if (typeof re.files.picture !== 'undefined' && typeof re.files.picture[0] !== 'undefined') {
      picture = re.files.picture[0].filename;
    }
    dbConnect.connect();
    dbConnect.query('SELECT * FROM users WHERE user_email = $1', [re.email], (err, result) => {
      if (result) {
        if (result.rowCount === 0) {
          bcrypt.hash(re.body.password, 10, (er, hash) => {
            if (hash) {
              dbConnect.query('INSERT into users(user_first_name,user_last_name,user_dob,user_gender,user_picture,user_email,user_password,user_vehicle_type,user_vehicle_model,user_dr_ln,user_vrn, user_vehicle_picture) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)', [
                re.body.firstname,
                re.body.lastname,
                re.body.dob,
                re.body.gender,
                picture,
                re.body.email,
                hash,
                re.body.vehicleType,
                re.body.vehicleModel,
                re.body.driverLn,
                re.body.VRN,
                re.files.vehiclePicture[0].filename], (e, r) => {
                if (r) {
                  dbConnect.query('SELECT id, user_password,user_email FROM users WHERE user_email = $1', [re.body.email], (o, y) => {
                    if (y) {
                      const token = helper.generateToken(y.rows[0]);
                      return res.status(200).json({ id: y.rows[0].id, token });
                    }
                    if (o) return res.status(500).json(o.stack);
                  });
                }
                if (e) return res.status(200).json(e.stack);
              });
            }
            if (er) return res.status(500).json(er.stack);
          });
        } else {
          return res.status(409).json({
            message: 'user already exist',
          });
        }
      }
      if (err) return res.status(500).json(err.stack);
    });
  }
  static logIn(req, res) {
    dbConnect.connect();
    dbConnect.query('SELECT id, user_password,user_email FROM users WHERE user_email = $1', [req.body.email], (err, result) => {
      if (result) {
        if (result.rowCount !== 0 && bcrypt.compare(req.body.password, result.rows[0].user_password)) {
          console.log('login:success, token generation in progress');
          const token = helper.generateToken(result.rows[0]);
          console.log('token generation success');
          return res.status(200).json({ id: result.rows[0].id, token });
        }
        return res.status(401).json({
          message: 'Auth failed',
        });
      }
      if (err) {
        return res.status(401).json({
          message: 'Auth failed',
        });
      }
    });
  }
  static editUserInfo(req, res) {
    dbConnect.connect();
    dbConnect.query('UPDATE users WHERE id = $1 SET user_first_name = $2, user_last_name = $3, user_dob = $4, user_gender = $5, user_picture = $6, user_email = $7, user_vehicle_type = $8, user_vehicle_model = $9, user_dr_ln = $10, user_vrn = $11, user_vehicle_picture = $12', [
      req.params.id,
      req.body.firstname,
      req.body.lastname,
      req.body.dob,
      req.body.gender,
      req.files.picture[0].filename,
      req.body.email,
      req.body.vehicleType,
      req.body.vehicleModel,
      req.body.driverLn,
      req.body.VRN,
      req.files.vehiclePicture[0].filename], (err, result) => {
      if (result) return res.status(200).json({ message: 'operation successful' });
      if (err) return res.status(500).json(err);
    });
  }
  static delete(req, res) {
    dbConnect.connect();
    dbConnect.query('DELETE FROM users WHERE id = $1', [req.params.id], (err, result) => {
      if (err) return res.status(404).json({ message: ' user not found' });
      if (result) return res.status(200).json({ message: 'operation successful' });
    });
  }
}
