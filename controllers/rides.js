import DB from './helper/dbconnect';

exports.getAllRides = (req, res) => {
  if (!DB.connect()) {
    DB.connect((err) => {
      if (err) {
        console.log('connection error:', err.stack);
      } else {
        console.log('connected');
      }
    });
  }
  DB.query('SELECT * FROM ride')
    .then(result => res.status(200).json(result.rows))
    .catch(err => console.error(err.stack))
    .then(() => DB.end());
};
exports.getRideSearch = (req, res) => {
  if (!DB.connect()) {
    DB.connect((err) => {
      if (err) {
        console.log('connection error:', err.stack);
      } else {
        console.log('connected');
      }
    });
  }
  DB.query('SELECT * FROM rides WHERE ride_location = $1 AND ride_destination = $2', [req.body.location, req.body.destination])
    .then(result => res.status(200).json(result.rows))
    .catch(err => console.error(err.stack))
    .then(() => DB.end());
};
exports.getRideDetail = (req, res) => {
  if (!DB.connect()) {
    DB.connect((err) => {
      if (err) {
        console.log('connection error:', err.stack);
      } else {
        console.log('connected');
      }
    });
  }
  DB.query('SELECT * FROM rides WHERE ride_owner_id = $1', [req.params.id])
    .then(result => res.status(200).json(result.rows))
    .catch(err => console.error(err.stack))
    .then(() => DB.end());
};

exports.addRide = (req, res) => {
  if (!DB.connect()) {
    DB.connect((err) => {
      if (err) {
        console.log('connection error:', err.stack);
      } else {
        console.log('connected');
      }
    });
  }
  DB.query('INSERT INTO rides(ride_location,ride_destination,ride_date,ride_time,ride_prize,ride_owner_id) VALUES($1,$2,$3,$4,$5,$6)', [req.body.location, req.body.destination, req.body.date, req.body.time, req.body.prize, req.body.id])
    .then(result => res.status(200).json(result.rowCount))
    .catch(err => console.error(err.stack))
    .then(() => DB.end());
};

exports.editRideDetail = (req, res) => {
  res.send({ type: 'PUT' });
};

exports.deleteRide = (req, res) => {
  console.log(req.params.id);
  res.json({ type: 'DELETE' });
};
