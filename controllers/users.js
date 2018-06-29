import bcrypt from 'bcrypt';
import generate from './helper/generateToken';
import DB from './helper/dbconnect';

export default class User {
  static homepage(req, res) {
    return res.status(200).json({
      message: 'Welcome',
    });
  }
  static getAllUsers(req, res) {
    if (!DB.connect()) {
      DB.connect();
    }
    DB.query('SELECT * FROM users')
      .then(result => res.status(200).json(result.rows[0]))
      .catch(err => res.status(500).json(err));
  }
  static getUser(req, res) {
    if (!DB.connect()) {
      DB.connect();
    }
    DB.query('SELECT * FROM users WHERE id = $1', [req.params.id])
      .then(result => res.status(200).json(result.rows[0]))
      .catch(err => res.status(500).json(err));
  }
  static addNewUser(req, res) {
    if (!DB.connect()) {
      DB.connect();
    }
    DB.query('SELECT * FROM users WHERE user_email = $1', [req.body.email])
      .then((result) => {
        if (result.rowCount < 1) {
          const hash = bcrypt.hashSync(req.body.password, 10);
          DB.query('INSERT into users(user_first_name,user_last_name,user_dob,user_gender,user_picture,user_email,user_password,user_vehicle_type,user_vehicle_model,user_dr_ln,user_vrn) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)', [req.body.firstname, req.body.lastname, req.body.dob, req.body.gender, req.body.picture, req.body.email, hash, req.body.vehicleType, req.body.vehicleModel, req.body.driverLn, req.body.VRN])
            .then(r => res.status(200).json(r))
            .catch(err => res.status(200).json(err));
        }
        return res.status(400).json({
          message: 'user already exist',
        });
      })
      .catch(err => res.status(200).json(err));
  }
  static authUser(req, res) {
    if (!DB.connect()) {
      DB.connect();
    }
    DB.query('SELECT id, user_password,user_email FROM users WHERE user_email = $1', [req.body.email])
      .then((result) => {
        if (!(result.rowCount < 1) && bcrypt.compareSync(req.body.password, result.rows[0].user_password)) {
          const token = generate(result.rows[0]);
          return res.status(200).json({ token });
        }
        return res.status(401).json({
          message: 'Auth failed',
        });
      })
      .catch(err => res.status(500).json(err));
  }
  static editUserInfo(req, res) {
    // this.connect(res);
    // DB.query('UPDATE users WHERE id = $1 SET user_first_name = $2 , [req.body.email, req.body.password])
    //   .then(result => res.status(200).json(result.rows))
    //   .catch(err => console.error(err.stack))
    //   .then(() => DB.end());
  }
  static deleteUser(req, res) {
    if (!DB.connect()) {
      DB.connect();
    }
    DB.query('DELETE * FROM users WHERE id = $1', [req.params.id], (err, result) => {
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
