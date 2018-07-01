import bcrypt from 'bcrypt';
import dbConnect from '../controllers/helper/dbConnect';
import helper from '../controllers/helper/index';


export default class user {
  static getAllUser(res) {
    dbConnect.connect();
    dbConnect.query('SELECT * FROM users', (err, result) => {
      if (result) return res.status(200).json(result.rows[0]);
      if (err) return res.status(500).json(err);
    });
  }
  static getUser(r, res) {
    dbConnect.connect();
    dbConnect.query('SELECT * FROM users WHERE id = $1', [r], (err, result) => {
      if (result) return res.status(200).json(result.rows[0]);
      if (err) return res.status(500).json(err);
    });
  }
  static addNewUser(re, res) {
    dbConnect.connect();
    dbConnect.query('SELECT * FROM users WHERE user_email = $1', [re.email], (err, result) => {
      if (result) {
        if (result.rowCount < 1) {
          bcrypt.hashSync(re.password, 10, (er, hash) => {
            if (hash) {
              dbConnect.query('INSERT into users(user_first_name,user_last_name,user_dob,user_gender,user_picture,user_email,user_password,user_vehicle_type,user_vehicle_model,user_dr_ln,user_vrn) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)', [re.firstname, re.lastname, re.dob, re.gender, re.picture, re.email, hash, re.vehicleType, re.vehicleModel, re.driverLn, re.VRN], (e, r) => {
                if (r) return res.status(200).json(r);
                if (e) return res.status(200).json(e.stack);
              });
            }
            if (er) return res.status(500).json(er.stack);
          });
        }
        return res.status(400).json({
          message: 'user already exist',
        });
      }
      if (err) return res.status(200).json(err.stack);
    });
  }
  static login(req, res) {
    dbConnect.connect();
    dbConnect.query('SELECT id, user_password,user_email FROM users WHERE user_email = $1', [req.body.email], (err, result) => {
      if (result) {
        if (!(result.rowCount < 1) && bcrypt.compareSync(req.body.password, result.rows[0].user_password)) {
          const token = helper.generateToken(result.rows[0]);
          return res.status(200).json({ token });
        }
      }
      if (err) {
        return res.status(401).json({
          message: 'Auth failed',
        });
      }
    });
  }
  static delete(req, res) {
    dbConnect.connect();
    dbConnect.query('DELETE * FROM users WHERE id = $1', [req.params.id], (err, result) => {
      if (err) {
        return res.status(404).json({
          message: 'Id not found',
        });
      }
      if (result) {
        return res.status(200).json(result.rows);
      }
    });
  }
}
