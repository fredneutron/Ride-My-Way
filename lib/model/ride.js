import dbConnect from '../controllers/helper/dbConnect';


export default class ride {
  static getAllRide(res) {
    dbConnect.connect();
    dbConnect.query('SELECT * FROM rides', (err, result) => {
      if (result) return res.status(200).json(result.rows);
      if (err) return res.status(500).json(err.stack);
    });
  }
  static getRide(req, res) {
    dbConnect.connect();
    dbConnect.query('SELECT * FROM rides WHERE ride_id = $1', [req.params.id], (err, result) => {
      if (result) return res.status(200).json(result.rows[0]);
      if (err) return res.status(404).json({ message: 'ride not found' });
    });
  }
  static searchRide(req, res) {
    dbConnect.connect();
    dbConnect.query('SELECT * FROM rides WHERE ride_destination = $1 AND ride_location = $2', [req.body.destination, req.body.location], (err, result) => {
      if (result) {
        dbConnect.query('SELECT * FROM rides WHERE ride_destination = $1', [req.body.destination], (er, re) => {
          if (re) return res.status(200).json({ search_result: result.rows, related_result: re.rows });
          if (er) return res.status(500).json(err.status);
        });
      }
      if (err) return res.status(500).json(err.stack);
    });
  }
  static addNewRide(req, res) {
    dbConnect.connect();
    dbConnect.query('INSERT INTO rides(ride_location,ride_destination,ride_date,ride_time,ride_prize,ride_owner_id,ride_seat,ride_mtp) VALUES($1,$2,$3,$4,$5,$6,$7)', [
      req.body.location,
      req.body.destination,
      req.body.date,
      req.body.time,
      req.body.prize,
      req.body.creator_id,
      req.body.seat,
      req.body.mtp], (err, result) => {
      if (result) return res.status(200).json(result.rowCount);
      if (err) return res.status(500).json(err.stack);
    });
  }
  static addReq(req, res) {
    dbConnect.connect();
    dbConnect.query('INSERT INTO ride_request(ride_id,passenger_id,req_status) VALUES($1,$2,$3)', [req.params.rideId, req.body.passenger_id, 'pending'], (err, result) => {
      if (result) return res.status(200).json(result.rowCount);
      if (err) return res.status(500).json(err.stack);
    });
  }
  static getRideRequests(req, res) {
    dbConnect.connect();
    dbConnect.query('SELECT * FROM ride_request WHERE ride_id = $1', [req.params.rideId], (err, result) => {
      if (result) return res.status(200).json(result.rows);
      if (err) return res.status(500).json(err.stack);
    });
  }
  static rideRequestOption(req, res) {
    dbConnect.connect();
    dbConnect.query('UPDATE ride_request SET req_status = $1 WHERE ride_id = $2 AND req_id = $3', [req.body.request_option, req.params.rideId, req.params.requestId], (err, result) => {
      if (result) return res.status(200).json(result.rowCount);
      if (err) return res.status(500).json(err.stack);
    });
  }
  static delete(req, res) {
    dbConnect.connect();
    dbConnect.query('DELETE FROM rides WHERE ride_id = $1', [req.params.rideId], (err, result) => {
      if (result) return res.status(200).json(result.rowCount);
      if (err) return res.status(404).json({ message: 'ride not found' });
    });
  }
}
