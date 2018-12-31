import filesystem from 'fs';
import helper from './helper/index';
import user from '../model/user';


export default class User {
  static getAllUsers(req, res) {
    return user.getAllUser(res);
  }
  static getUser(req, res) {
    if (typeof req.params.id !== 'undefined') {
      return user.getUser(req.params.id, res);
    }
    return res.status(400).json({
      error: 'id[number] is required',
    });
  }
  static signUp(req, res) {
    if (helper.checkUser(req) === true) {
      if (typeof req.files.vehiclePicture !== 'undefined' && typeof req.files.vehiclePicture[0] !== 'undefined') {
        return user.signUp(req, res);
      }
      if (typeof req.files.picture !== 'undefined' && typeof req.files.picture[0] !== 'undefined') {
        return filesystem.unlink(req.files.picture[0].path, () => {
          res.status(400).json({
            error: {
              message: 'vehiclePicture[image] can not be empty',
            },
          });
        });
      }
      return res.status(400).json({
        error: {
          message: 'vehiclePicture[image] can not be empty',
        },
      });
    }
    return res.status(400).json({
      error: {
        message: helper.checkUser(req),
      },
    });
  }
  static logIn(req, res) {
    if (req.body.email !== '' && req.body.password !== '') {
      console.log('Login: controller');
      return user.logIn(req, res);
    }
    return res.status(400).json({
      error: 'email/Password can not be empty',
    });
  }
  static editUserInfo(req, res) {
    if (helper.checkUser(req) === true && typeof req.params.id !== 'undefined') {
      if (typeof req.files.vehiclePicture !== 'undefined') {
        return user.editUserInfo(req, res);
      }
      return filesystem.unlink(req.files.picture[0].path, () => {
        res.status(400).json({
          error: {
            message: 'vehiclePicture[image] can not be empty',
          },
        });
      });
    }
    return res.status(400).json({
      error: {
        message: helper.checkUser(req),
      },
    });
  }
  static deleteUser(req, res) {
    if (helper.emptyChecker(req.params.id)) return user.delete(req, res);
    return res.status(400).json({
      error: 'id[number] is required',
    });
  }
}
