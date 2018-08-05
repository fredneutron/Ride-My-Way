import express from 'express';
import validate from '../Middleware/validate';
import rideController from '../controllers/rides';

const ride = express.Router();
// get all rides
ride.get('/rides', rideController.getAllRides);
// getting ride details for a user
ride.get('/rides/:id', validate, rideController.getRideDetail);
// adding a new ride
ride.post('/users/rides', validate, rideController.addRide);
// adding a ride request
ride.post('/rides/:rideId/request', validate, rideController.addRequest);
// get all ride request
ride.get('/users/rides/:rideId/request', validate, rideController.getRideRequests);
// adding request option {Accept or Reject}
ride.put('/users/rides/:rideId/requests/:requestId', validate, rideController.RequestOption);
// ride search
ride.post('/search', rideController.getRideSearch);
// delete a ride
ride.delete('/rides/:rideId', validate, rideController.deleteRide);

export default ride;
