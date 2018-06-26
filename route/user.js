import express from 'express';
import fs from 'fs';
import path from 'path';
import userValidate from '../helper/userValidate';


const user = express.Router();
// get the list of user
user.get('/users', (req, res) => {
  fs.readFile(path.join(__dirname, '/../Database/index.json'), 'utf8', (err, data) => {
    const obj = JSON.parse(data);
    res.send(obj.users);
  });
});
user.get('/getusers/:id', (req, res) => {
  fs.readFile(path.join(__dirname, '/../Database/index.json'), 'utf8', (err, data) => {
    const obj = JSON.parse(data);
    res.status().end(JSON.stringify(obj.users[req.params.id]));
  });
});
// add a user
user.post('/users', (req, res) => {
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
      res.json({ key: id });
    }
  });
});
user.post('/authusers', (req, res) => {
  fs.readFile(path.join(__dirname, '/../Database/index.json'), 'utf8', (err, data) => {
    const obj = JSON.parse(data);
    const n = userValidate(obj.users, req.body.user, req.body.pass);
    res.json({ key: n });
  });
});
// update a user
user.put('/users/:id', (req, res) => {
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
      res.json({ key: req.params.id });
    }
  });
});
// delete a user
user.delete('/users/:id', (req, res) => {
  res.json({ type: 'DELETE' });
});

export default user;
