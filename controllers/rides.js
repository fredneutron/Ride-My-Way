import helper from './helper/index';
import ride from '../model/ride';

export default class Ride {
  static getAllRides(req, res) {
    return ride.getAllRide(res);
  }
  static getRideSearch(req, res) {
    if (req.body.destination !== '') {
      return ride.searchRide(req.body.destination, res);
    }
    return res.status(400).json({
      error: 'destination can not be empty',
    });
  }
  static getRideDetail(req, res) {
    if (typeof req.params.id !== 'undefined') {
      return ride.getRide(req.params.id, res);
    }
    return res.status(400).json({
      error: 'id[number] is required',
    });
  }
  static addRide(req, res) {
    if (helper.checkRide(req)) {
      return ride.addNewRide(req, res);
    }
    return res.status(400).json(helper.checkRide(req));
  }
  static addRequest(req, res) {
    if (helper.checkRequest(req)) {
      return ride.addReq(req, res);
    }
    return helper.checkRequest(req);
  }
  static deleteRide(req, res) {
    if (typeof req.params.id !== 'number') {
      return ride.delete(req, res);
    }
    return res.status(400).json({
      error: 'id[number] is required',
    });
  }
}

