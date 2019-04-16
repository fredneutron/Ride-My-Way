import dbConnect from '../controllers/helper/dbConnect';


export default class ride {
  static getAllRide(req, res, today) {
    dbConnect.connect();
    dbConnect.query('SELECT * FROM rides WHERE ride_date <= $1', [today], (err, result) => {
      if (result) {
        return res.status(200).json({
          total: result.rowCount,
          requests: result.rows,
        });
      }
      return res.status(500).json(err);
    });
  }
  static getActiveUser(req, res, today) {
    dbConnect.connect();
    dbConnect.query('SELECT * FROM rides WHERE ride_owner_id = $1 AND ride_date <= $1', [req.params.id, today], (err, result) => {
      if (result) {
        return res.status(200).json({
          total: result.rowCount,
          requests: result.rows,
        });
      }
      return res.status(500).json(err);
    });
  }
  static getAllRidesUser(req, res) {
    dbConnect.connect();
    dbConnect.query('SELECT * FROM rides WHERE ride_owner_id = $1', [req.params.id], (err, result) => {
      if (result) {
        return res.status(200).json({
          total: result.rowCount,
          requests: result.rows,
        });
      }
      return res.status(500).json(err);
    });
  }
  static getRide(req, res) {
    dbConnect.connect();
    dbConnect.query('SELECT * FROM rides WHERE ride_id = $1', [req.params.id], (err, result) => {
      if (result) return res.status(200).json(result.rows[0]);
      return res.status(404).json({ message: 'ride not found' });
    });
  }
  static searchRide(req, res, today) {
    dbConnect.connect();
    dbConnect.query('SELECT * FROM rides WHERE ride_destination = $1 AND ride_location = $2 AND ride_date <= $3', [
      req.body.destination,
      req.body.location,
      today], (err, result) => {
      if (result) {
        dbConnect.query('SELECT * FROM rides WHERE ride_destination = $1 AND ride_date <= $2', [
          req.body.destination,
          today], (er, re) => {
          if (re) {
            return res.status(200).json({
              search_result: result.rows,
              related_result: re.rows,
            });
          }
          return res.status(500).json(err);
        });
      }
      return res.status(500).json(err);
    });
  }
  static addNewRide(req, res) {
    dbConnect.connect();
    dbConnect.query('SELECT picture FROM users WHERE id = $1', [req.body.creator_id], (err, result) => {
      if (result) {
        if (result.rowCount === 0) {
          dbConnect.query('INSERT INTO rides(ride_location,ride_destination,ride_date,ride_time,ride_prize,ride_owner_id,ride_seat,ride_mtp,ride_image) VALUES($1,$2,$3,$4,$5,$6,$7)', [
            req.body.location,
            req.body.destination,
            req.body.date,
            req.body.time,
            req.body.prize,
            req.body.creator_id,
            req.body.seat,
            req.body.mtp,
            result.rows[0].ride_image], (er, re) => {
            if (re) return res.status(200).json(result.rowCount);
            return res.status(500).json(err);
          });
        }
        res.status(400).json({
          error: {
            message: 'user avatar is not set, Please set user avatar',
          },
        });
      }
      return res.status(500).json(err);
    });
  }
  static addReq(req, res) {
    dbConnect.connect();
    dbConnect.query('INSERT INTO ride_request(ride_id,passenger_id,req_status) VALUES($1,$2,$3)', [
      req.params.rideId,
      req.body.passenger_id,
      'pending'], (err, result) => {
      if (result) return res.status(200).json(result.rowCount);
      return res.status(500).json(err);
    });
  }
  static getRideRequests(req, res) {
    dbConnect.connect();
    dbConnect.query('SELECT * FROM ride_request WHERE ride_id = $1', [req.params.rideId], (err, result) => {
      if (result) {
        return res.status(200).json({
          total: result.rowCount,
          requests: result.rows,
        });
      }
      return res.status(500).json(err);
    });
  }
  static getRequest(req, res) {
    dbConnect.connect();
    dbConnect.query('SELECT * FROM ride_request WHERE passenger_id = $1', [req.params.id], (err, result) => {
      if (result) {
        return res.status(200).json({
          total: result.rowCount,
          requests: result.rows,
        });
      }
      return res.status(500).json(err);
    });
  }
  static getAcRideRequest(req, res) {
    dbConnect.connect();
    dbConnect.query('SELECT * FROM ride_request WHERE passenger_id = $1 AND req_status = $2', [req.params.id, 'Accept'], (err, result) => {
      if (result) {
        return res.status(200).json({
          total: result.rowCount,
          requests: result.rows,
        });
      }
      return res.status(500).json(err);
    });
  }
  static rideRequestOption(req, res) {
    dbConnect.connect();
    dbConnect.query('UPDATE ride_request SET req_status = $1 WHERE ride_id = $2 AND req_id = $3', [
      req.body.request_option,
      req.params.rideId,
      req.params.requestId], (err, result) => {
      if (result) return res.status(200).json(result.rowCount);
      return res.status(500).json(err);
    });
  }
  static delete(req, res) {
    dbConnect.connect();
    dbConnect.query('DELETE FROM rides WHERE ride_id = $1', [req.params.rideId], (err, result) => {
      if (result) return res.status(200).json(result.rowCount);
      return res.status(404).json({ message: 'ride not found' });
    });
  }
}
