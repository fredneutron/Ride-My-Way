import DB from './helper/dbconnect';

export default class Ride {
  static getAllRides(req, res) {
    if (!DB.connect()) {
      DB.connect();
    }
    DB.query('SELECT * FROM rides')
      .then(result => res.status(200).json(result.rows))
      .catch(err => res.status(500).json(err.stack));
  }
  static getRideSearch(req, res) {
    if (!DB.connect()) {
      DB.connect();
    }
    DB.query('SELECT * FROM rides WHERE ride_destination = $1', [req.body.destination])
      .then(result => res.status(200).json(result.rows))
      .catch(err => res.status(500).json(err.stack));
  }
  static getRideDetail(req, res) {
    if (!DB.connect()) {
      DB.connect();
    }
    DB.query('SELECT * FROM rides WHERE ride_id = $1', [req.params.id])
      .then(result => res.status(200).json(result.rows))
      .catch(err => res.status(500).json(err.stack));
  }
  static addRide(req, res) {
    if (!DB.connect()) {
      DB.connect();
    }
    DB.query('INSERT INTO rides(ride_location,ride_destination,ride_date,ride_time,ride_prize,ride_owner_id) VALUES($1,$2,$3,$4,$5,$6)', [req.body.location, req.body.destination, req.body.date, req.body.time, req.body.prize, req.body.creator_id])
      .then(result => res.status(200).json(result.rowCount))
      .catch(err => res.status(500).json(err.stack));
  }
  static addRequest(req, res) {
    if (!DB.connect()) {
      DB.connect();
    }
    DB.query('SELECT ride_owner_id FROM rides WHERE ride_id = $1', [req.params.id])
      .then((result) => {
        if (result.rowCount > 0) {
          DB.query('INSERT INTO FROM rides_details(ride_id,passenger_id,passenger_status,ride_creator_id) VALUES()', [req.params.id, req.body.passenger_id, 'pending', result.rows.ride_owner_id])
            .then(re => res.status(200).json(re.rows))
            .catch(err => res.status(500).json(err.stack));
        }
        res.status(500).json({
          message: 'DB connection fail',
        });
      })
      .catch(err => res.status(500).json(err.stack));
  }
  static deleteRide(req, res) {
    if (!DB.connect()) {
      DB.connect();
    }
    DB.query('DELETE * FROM rides WHERE ride_id = $1', [req.params.id])
      .then(result => res.status(200).json(result.rows))
      .catch(err => res.status(500).json(err.stack));
  }
}

