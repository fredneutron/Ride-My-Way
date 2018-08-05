import helper from './helper/index';
import ride from '../model/ride';

export default class Ride {
  // Controller for getAllRide endpoint
  static getAllRides(req, res) {
    return ride.getAllRide(res);
  }
  // Controller for getRideSearch endpoint
  static getRideSearch(req, res) {
    if (
      helper.emptyChecker(req.body.destination) &&
      helper.emptyChecker(req.body.location)) return ride.searchRide(req, res);
    return res.status(400).json({ error: 'destination/location can not be empty' });
  }
  // Controller for getRideDetail endpoint
  static getRideDetail(req, res) {
    if (helper.emptyChecker(req.params.id)) return ride.getRide(req, res);
    return res.status(400).json({ error: 'id[number] is required' });
  }
  // Controller for add ride endpoint
  static addRide(req, res) {
    if (helper.checkRide(req)) return ride.addNewRide(req, res);
    return res.status(400).json(helper.checkRide(req));
  }
  // Controller for adding ride request endpoint
  static addRequest(req, res) {
    if (helper.checkRequest(req)) return ride.addReq(req, res);
    return res.status(400).json(helper.checkRequest(req));
  }
  // Controller for getting all ride requests
  static getRideRequests(req, res) {
    if (helper.emptyChecker(req.params.rideId)) return ride.getRideRequests(req, res);
    return res.status(400).json({ error: 'rideId[number] is required' });
  }
  // Controller for accepting/rejecting ride requests
  static RequestOption(req, res) {
    if (
      helper.emptyChecker(req.params.rideId) &&
      helper.emptyChecker(req.params.requestId) &&
      helper.emptyChecker(req.body.request_option)) {
      return ride.rideRequestOption(req, res);
    }
    return res.status(400).json({ error: 'rideId[number]/ requestId[number] is required' });
  }
  // Controller for delete ride endpoint
  static deleteRide(req, res) {
    if (typeof req.params.id === 'string') {
      return ride.delete(req, res);
    }
    return res.status(400).json({
      error: 'id[number] is required',
    });
  }
}

