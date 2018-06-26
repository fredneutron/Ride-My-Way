import express from 'express';
import fs from 'fs';
import path from 'path';

const ride = express.Router();
// get the list of ride
ride.get('/rides', (req, res) => {
  fs.readFile(path.join(__dirname, '/../Database/index.json'), 'utf8', (data) => {
    const obj = JSON.parse(data);
    res.json(obj.rides);
  });
});
ride.get('/rides/:id', (req, res) => {
  fs.readFile(path.join(__dirname, '/../Database/index.json'), 'utf8', (data) => {
    const obj = JSON.parse(data);
    res.json(JSON.stringify(obj.rides[req.params.id]));
  });
});
//
// add a ride
ride.post('/rides', (req, res) => {
  fs.readFile(path.join(__dirname, '/../Database/index.json'), 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const obj = JSON.parse(data);
      const id = Object.keys(obj.rides).length + 1;
      obj.ride[req.body.id].ride[id] = {
        location: req.body.location,
        destination: req.body.destination,
        date: req.body.date,
        time: req.body.time,
      };
      const json = JSON.stringify(obj);
      fs.writeFile(path.join(__dirname, '/../Database/index.json'), json, 'utf8', (er) => {
        if (er) throw er;
      });
      res.json({ key: id });
    }
  });
});
// update a ride
ride.put('/rides/:id', (req, res) => {
  res.send({ type: 'PUT' });
});
// delete a ride
ride.delete('/rides/:id', (req, res) => {
  console.log(req.params.id);
  res.json({ type: 'DELETE' });
});

export default ride;
