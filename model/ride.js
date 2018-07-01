import dbConnect from '../controllers/helper/dbConnect';


export default class ride {
  static getAllRide(res) {
    dbConnect.connect();
    dbConnect.query('SELECT * FROM rides', (err, result) => {
      if (result) return res.status(200).json(result.rows[0]);
      if (err) return res.status(500).json(err.stack);
    });
  }
  static getRide(r, res) {
    dbConnect.connect();
    dbConnect.query('SELECT * FROM rides WHERE ride_id = $1', [r], (err, result) => {
      if (result) return res.status(200).json(result.rows[0]);
      if (err) return res.status(500).json(err.stack);
    });
  }
  static searchRide(r, res) {
    dbConnect.connect();
    dbConnect.query('SELECT * FROM rides WHERE ride_destination = $1', [r], (err, result) => {
      if (result) return res.status(200).json(result.rows);
      if (err) return res.status(500).json(err.stack);
    });
  }
  static addNewRide(req, res) {
    dbConnect.connect();
    dbConnect.query('INSERT INTO rides(ride_location,ride_destination,ride_date,ride_time,ride_prize,ride_owner_id) VALUES($1,$2,$3,$4,$5,$6)', [req.body.location, req.body.destination, req.body.date, req.body.time, req.body.prize, req.body.creator_id], (err, result) => {
      if (result) return res.status(200).json(result.rowCount);
      if (err) return res.status(500).json(err.stack);
    });
  }
  static addReq(req, res) {
    dbConnect.connect();
    dbConnect.query('SELECT ride_owner_id FROM rides WHERE ride_id = $1', [req.params.id], (err, result) => {
      if (result) {
        if (result.rowCount > 0) {
          dbConnect.query('INSERT INTO FROM rides_details(ride_id,passenger_id,passenger_status,ride_creator_id) VALUES()', [req.params.id, req.body.passenger_id, 'pending', result.rows.ride_owner_id], (e, r) => {
            if (r) return res.status(200).json(r.rows[0]);
            if (e) return res.status(500).json(e.stack);
          });
        }
        return res.status(500).json({
          message: 'DB connection fail',
        });
      }
      if (err) return res.status(500).json(err.stack);
    });
  }
  static delete(req, res) {
    dbConnect.connect();
    dbConnect.query('DELETE * FROM rides WHERE ride_id = $1', [req.params.id], (err, result) => {
      if (result) return res.status(200).json(result.rows);
      if (err) return res.status(500).json(err.stack);
    });
  }
}
