import ride from '../model/ride';

export default class Ride {
  constructor() {
    const n = new Date().now();
    this.today = new Date(`${n.getDate()}/${n.getMonth()}/${n.getFullYear()}`);
  }
  // method for getAllRide endpoint
  static getAllRides(req, res) {
    return ride.getAllRide(req, res, Ride.today);
  }
  // method for active ride offers for a user
  static getAllActive(req, res) {
    return ride.getActiveUser(req, res, Ride.today);
  }
  // method for getAllRideForOneUser
  static getAllRidesUser(req, res) {
    if (typeof req.params.id !== 'undefined') return ride.getAllRidesUser(req.params.id, res);
    return res.status(400).json({
      error: 'id[number] is required',
    });
  }
  // method for getRideSearch endpoint
  static getRideSearch(req, res) {
    if (
      this.isEmpty(req.body.destination) &&
      this.isEmpty(req.body.location)) return ride.searchRide(req, res, Ride.today);
    return res.status(400).json({
      error: 'destination/location can not be empty',
    });
  }
  // method for getRideDetail endpoint
  static getRideDetail(req, res) {
    if (this.isEmpty(req.params.id)) return ride.getRide(req, res);
    return res.status(400).json({
      error: 'id[number] is required',
    });
  }
  // method for add ride endpoint
  static addRide(req, res) {
    if (this.validateRideReq(req)) return ride.addNewRide(req, res);
    return res.status(400).json(this.validateRideReq(req));
  }
  // Controller for adding ride request endpoint
  static addRequest(req, res) {
    if (this.validateRRReq(req)) return ride.addReq(req, res);
    return res.status(400).json(this.validateRRReq(req));
  }
  // Controller for getting all ride requests
  static getRideRequests(req, res) {
    if (this.isEmpty(req.params.rideId)) return ride.getRideRequests(req, res);
    return res.status(400).json({ error: 'rideId[number] is required' });
  }
  static getRequests(req, res) {
    if (this.isEmpty(req.params.id)) {
      return ride.getRequest(req, res);
    }
    return res.status(400).json({ error: 'id[number] is required' });
  }
  // getting all accepted ride requests for a user
  static getActiveRequests(req, res) {
    if (this.isEmpty(req.params.id)) {
      return ride.getAcRideRequest(req, res);
    }
    return res.status(400).json({ error: 'id[number] is required' });
  }
  // Controller for accepting/rejecting ride requests
  static RequestOption(req, res) {
    if (
      this.isEmpty(req.params.rideId) &&
      this.isEmpty(req.params.requestId) &&
      this.isEmpty(req.body.request_option)) {
      return ride.rideRequestOption(req, res);
    }
    return res.status(400).json({ error: 'rideId[number]/ requestId[number] is required' });
  }
  // Controller for delete ride endpoint
  static deleteRide(req, res) {
    if (this.isEmpty(req.params.rideId)) {
      return ride.delete(req, res);
    }
    return res.status(400).json({
      error: 'id[number] is required',
    });
  }
  static isEmpty(word) {
    if (typeof word !== 'undefined' && word !== '') {
      return true;
    }
    return false;
  }
  // validate ride requests req
  static validateRRReq(req) {
    const data = [req.params.rideId, req.body.passenger_id];
    const error = [
      'Error: parameter id can not be empty',
      'Error: passenger_id can not be empty'];
    for (let i = 0; i < data.length; i += 1) {
      if (data[i] === '') {
        return error[i];
      }
    }
    return true;
  }
  // validate ride req
  static validateRideReq(req) {
    const data = [
      req.body.location,
      req.body.destination,
      req.body.date,
      req.body.time,
      req.body.prize,
      req.body.creator_id,
      req.body.mtp];
    const error = ['Error: Location can not be empty', 'Error: destination can not be empty', 'Error: date can not be empty', 'Error: time can not be empty', 'Error: prize can not be empty', 'Error: creator_id can not be empty', 'Error: ride meeting point can not be empty'];
    for (let i = 0; i < data.length; i += 1) {
      if (typeof data[i] === 'undefined' && data[i] == null) {
        return error[i];
      }
    }
    return true;
  }
}

