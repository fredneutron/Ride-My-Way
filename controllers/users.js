import fs from 'fs';
import path from 'path';
import userValidate from './helper/userValidate';

exports.get_all_users = (req, res) => {
  fs.readFile(path.join(__dirname, '/../Database/index.json'), 'utf8', (err, data) => {
    const obj = JSON.parse(data);
    return res.status(200).json(obj.users);
  });
};

exports.get_user = (req, res) => {
  fs.readFile(path.join(__dirname, '/../Database/index.json'), 'utf8', (err, data) => {
    const obj = JSON.parse(data);
    return res.status(200).json(JSON.stringify(obj.users[req.params.id]));
  });
};

exports.add_new_user = (req, res) => {
  fs.readFile(path.join(__dirname, '/../Database/index.json'), 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const obj = JSON.parse(data);
      const id = Object.keys(obj.users).length + 1;
      obj.users[id] = req.body;
      const json = JSON.stringify(obj);
      fs.writeFile(path.join(__dirname, '/../Database/index.json'), json, 'utf8', (er) => {
        if (er) throw er;
      });
      return res.status(200).json({ key: id });
    }
  });
};

exports.authuser = (req, res) => {
  fs.readFile(path.join(__dirname, '/../Database/index.json'), 'utf8', (err, data) => {
    const obj = JSON.parse(data);
    const n = userValidate(obj.users, req.body.user, req.body.pass);
    res.status(404).json({
      key: n,
    });
  });
};

exports.edit_user_info = (req, res) => {
  fs.readFile(path.join(__dirname, '/../Database/index.json'), 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const obj = JSON.parse(data);
      obj.users[req.params.id] = req.body;
      const json = JSON.stringify(obj);
      fs.writeFile(path.join(__dirname, '/../Database/index.json'), json, 'utf8', (er) => {
        if (er) throw er;
      });
      return res.status(200).json({ key: req.params.id });
    }
  });
};
exports.delete_user = (req, res) => {
  fs.readFile(path.join(__dirname, '/../Database/index.json'), 'utf8', (err, data) => {
    const obj = JSON.parse(data);
    if (obj.users[req.params.id]) {
      return res.status(200).json({
        key: req.params.id,
      });
    }
  });
};
