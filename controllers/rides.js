import fs from 'fs';
import path from 'path';

exports.get_all_rides = (req, res) => {
  fs.readFile(path.join(__dirname, '/../Database/index.json'), 'utf8', (data) => {
    const obj = JSON.parse(data);
    res.status(200).json(obj.rides);
  });
};

exports.get_ride_detail = (req, res) => {
  fs.readFile(path.join(__dirname, '/../Database/index.json'), 'utf8', (data) => {
    const obj = JSON.parse(data);
    res.json(JSON.stringify(obj.rides[req.params.id]));
  });
};

exports.add_ride = (req, res) => {
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
};

exports.edit_ride_detail = (req, res) => {
  res.send({ type: 'PUT' });
};

exports.delete_ride = (req, res) => {
  console.log(req.params.id);
  res.json({ type: 'DELETE' });
};
