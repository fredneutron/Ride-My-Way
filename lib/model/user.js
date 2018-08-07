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
    dbConnect.connect();
    dbConnect.query('SELECT * FROM users WHERE user_email = $1', [re.email], (err, result) => {
      if (result) {
        if (result.rowCount !== 0) {
          bcrypt.hashSync(re.password, 10, (er, hash) => {
            if (hash) {
              dbConnect.query('INSERT into users(user_first_name,user_last_name,user_dob,user_gender,user_picture,user_email,user_password,user_vehicle_type,user_vehicle_model,user_dr_ln,user_vrn) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)', [re.firstname, re.lastname, re.dob, re.gender, re.picture, re.email, hash, re.vehicleType, re.vehicleModel, re.driverLn, re.VRN], (e, r) => {
                if (r) {
                  dbConnect.query('SELECT id, user_password,user_email FROM users WHERE user_email = $1', [re.email], (o, y) => {
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
        if (!(result.rowCount < 1) && bcrypt.compareSync(req.body.password, result.rows[0].user_password)) {
          const token = helper.generateToken(result.rows[0]);
          return res.status(200).json({ id: result.rows[0].id, token });
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
    dbConnect.query('DELETE FROM users WHERE id = $1', [req.params.id], (err, result) => {
      if (err) return res.status(404).json({ message: ' user not found' });
      if (result) return res.status(200).json({ message: 'operation successful' });
    });
  }
}
