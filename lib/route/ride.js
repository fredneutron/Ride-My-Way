import express from 'express';
import validate from '../Middleware/validate';
import rideController from '../controllers/rides';

const ride = express.Router();
// get all rides
ride.get('/rides', rideController.getAllRides);
// get ride details for a user
ride.get('/rides/:id', validate, rideController.getRideDetail);
// adding a new ride
ride.post('/users/rides', validate, rideController.addRide);
// adding a ride request
ride.post('/rides/:rideId/request', validate, rideController.addRequest);
// search for active ride offers
ride.post('/rides/search', rideController.getRideSearch);
// delete a ride
ride.delete('/rides/:rideId', validate, rideController.deleteRide);
// get all ride offers of a user
ride.get('/users/:id/rides', validate, rideController.getAllRidesUser);
// get all active ride offers of a user
ride.get('users/:id/rides/active', validate, rideController.getAllActive);
// get all ride request
ride.get('/users/rides/:rideId/request', validate, rideController.getRideRequests);
// get all Accepted ride requests for a user
ride.get('/users/:id/requests/Accepted', validate, rideController.getActiveRequests);
// get all ride requests for a user
ride.get('/users/:id/requests', validate, rideController.getActiveRequests);

export default ride;
