import express from 'express';
import fs from 'fs';
import path from 'path';

const driver = express.Router();
// get the list of driver
driver.get('/drivers', (req, res) => {
  res.send({ type: 'GET' });
});
// add a driver
driver.post('/drivers', (req, res) => {
  fs.readFile(path.json(__dirname, '/../Database/index.json'), 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const obj = JSON.parse(data);
      // let id = "user" + (Object.keys(obj.users).length + 1);
      obj.drivers[req.body.id] = req.body;
      console.log(obj.drivers[req.body.id]);
      const json = JSON.stringify(obj);
      fs.writeFile(path.join(__dirname, '/../Database/index.json'), json, 'utf8', (er) => {
        if (er) throw er;
        console.log('file has been saved');
      });
      res.json(req.body.id);
    }
  });
});
// update a driver
driver.put('/drivers/:id', (req, res) => {
  res.send({ type: 'PUT' });
});
// delete a driver
driver.delete('/drivers/:id', (req, res) => {
  res.send({ type: 'DELETE' });
});

export default driver;
