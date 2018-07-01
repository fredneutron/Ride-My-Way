import helper from './helper/index';
import user from '../model/user';


export default class User {
  static homepage(req, res) {
    return res.status(200).json({
      message: 'Welcome',
    });
  }
  static getAllUsers(req, res) {
    return user.getAllUser(req.params.id, res);
  }
  static getUser(req, res) {
    if (typeof req.params.id !== 'undefined') {
      return user.getUser(req.params.id, res);
    }
    return res.status(400).json({
      error: 'id[number] is required',
    });
  }
  static addNewUser(req, res) {
    if (helper.checkUser(req) === true) {
      return user.addNewUser(req.body, res);
    }
    return res.status(400).json(helper.checkUser(req));
  }
  static authUser(req, res) {
    if (req.body.email !== '' && req.body.password !== '') {
      return user.login(req, res);
    }
    return res.status(400).json({
      error: 'email/Password can not be empty',
    });
  }
  static editUserInfo(req, res) {
    // this.connect(res);
    // DB.query('UPDATE users WHERE id = $1 SET user_first_name = $2 , [req.body.email, req.body.password])
    //   .then(result => res.status(200).json(result.rows))
    //   .catch(err => console.error(err.stack))
    //   .then(() => DB.end());
  }
  static deleteUser(req, res) {
    console.log(req.params.id);
    if (typeof req.params.id !== 'undefined') {
      return user.delete(req, res);
    }
    return res.status(400).json({
      error: 'id[number] is required',
    });
  }
}
