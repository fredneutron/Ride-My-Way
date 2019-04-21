import filesystem from 'fs';
import helper from './helper/index';
import UserModel from '../model/user';


class UserController {
  static getAllUsers(req, res) {
    return UserModel.getAllUser(res);
  }
  static getUser(req, res) {
    if (typeof req.params.id !== 'undefined') {
      return UserModel.getUser(req.params.id, res);
    }
    return res.status(400).json({
      error: 'id[number] is required',
    });
  }
  static signUp(req, res) {
    if (helper.checkUser(req) === true) {
      if (typeof req.files.vehiclePicture !== 'undefined' && typeof req.files.vehiclePicture[0] !== 'undefined') {
        return UserModel.signUp(req, res);
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
      return UserModel.logIn(req, res);
    }
    return res.status(400).json({
      error: 'email/Password can not be empty',
    });
  }
  static editUserInfo(req, res) {
    if (helper.checkUser(req) === true && typeof req.params.id !== 'undefined') {
      if (typeof req.files.vehiclePicture !== 'undefined') {
        return UserModel.editUserInfo(req, res);
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
    if (helper.emptyChecker(req.params.id)) return UserModel.delete(req, res);
    return res.status(400).json({
      error: 'id[number] is required',
    });
  }
}

export default UserController;
