import bcrypt from 'bcrypt';
import DB from './helper/dbconnect';

export function homepage(req, res) {
  res.status(200).json({
    message: 'Welcome',
  });
}
export function getAllUsers(req, res) {
  if (!DB.connect()) {
    DB.connect((err) => {
      if (err) {
        console.log('connection error:', err.stack);
      } else {
        console.log('connected');
      }
    });
  }
  DB.query('SELECT * FROM users')
    .then(result => res.status(200).json(result.rows))
    .catch(err => console.error(err.stack))
    .then(() => DB.end());
}

export function getUser(req, res) {
  if (!DB.connect()) {
    DB.connect((err) => {
      if (err) {
        console.log('connection error:', err.stack);
      } else {
        console.log('connected');
      }
    });
  }
  DB.query('SELECT * FROM users WHERE id = $1', [req.params.id])
    .then(result => res.status(200).json(result.rows))
    .catch(err => console.error(err.stack))
    .then(() => DB.end());
}

export function addNewUser(req, res) {
  if (!DB.connect()) {
    DB.connect((er) => {
      if (er) {
        console.log('connection error:', er.stack);
      } else {
        console.log('connected');
      }
    });
  }
  DB.query('SELECT * FROM users WHERE user_email = $1', [req.body.email])
    .then((result) => {
      if (result.rowCount < 1) {
        return res.status(409).json({
          message: 'please login into your account',
        });
      }
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          res.status(500).json(err);
        } else {
          DB.query('INSERT into users(user_first_name,user_last_name,user_dob,user_gender,user_picture,user_email,user_password,user_vehicle_type,user_vehicle_model,user_dr_ln,user_vrn) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)', [req.body.firstname, req.body.lastname, req.body.dob, req.body.gender, req.body.picture, req.body.email, hash, req.body.vehicleType, req.body.vehicleModel, req.body.driverLn, req.body.VRN])
            .then(resu => res.status(200).json(resu.rowCount))
            .catch(er => console.error(er.stack))
            .then(() => DB.end());
        }
      });
    })
    .catch(err => console.error(err.stack))
    .then(() => DB.end());
}

export function authUser(req, res) {
  if (!DB.connect()) {
    DB.connect((err) => {
      if (err) {
        console.log('connection error:', err.stack);
      } else {
        console.log('connected');
      }
    });
  }
  DB.query('SELECT user_password FROM users WHERE user_email = $1', [req.body.email])
    .then((result) => {
      if (result.rowCount < 1) {
        return res.status(401).json({
          message: 'Auth failed',
        });
      }
      bcrypt.compare(req.body.password, result.rows, (e, r) => {
        if (e) {
          return res.status(401).json({
            message: 'Auth failed',
          });
        }
        if (r) {
          return res.status(200).json(result.rowCount);
        }
      });
    })
    .catch(err => console.error(err.stack))
    .then(() => DB.end());
}

export function editUserInfo(req, res) {
  // if (!DB.connect()) {
  //   DB.connect((err) => {
  //     if (err) {
  //       console.log('connection error:', err.stack);
  //     } else {
  //       console.log('connected');
  //     }
  //   });
  // }
  // DB.query('UPDATE users WHERE id = $1 SET user_first_name = $2 , [req.body.email, req.body.password])
  //   .then(result => res.status(200).json(result.rows))
  //   .catch(err => console.error(err.stack))
  //   .then(() => DB.end());
}
export function deleteUser(req, res) {
  if (!DB.connect()) {
    DB.connect((err) => {
      if (err) {
        console.log('connection error:', err.stack);
      } else {
        console.log('connected');
      }
    });
  }
  DB.query('DELETE * FROM users WHERE id = $1', [req.params.id])
    .then(result => res.status(200).json(result.rows))
    .catch(err => console.error(err.stack))
    .then(() => DB.end());
}
