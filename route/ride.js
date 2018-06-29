import express from 'express';
import validate from '../Middleware/validate';
import rideController from '../controllers/rides';

const ride = express.Router();
// get the list of ride
ride.get('/rides', rideController.getAllRides);
// get rides for a user
ride.get('/rides/:id', rideController.getRideDetail);
// add a ride
ride.post('/rides', validate, rideController.addRide);
ride.post('rides/:id/request', validate, rideController.addRequest);
// ride search
ride.post('/rideSearch', rideController.getRideSearch);
// delete a ride
ride.delete('/rides/:id', validate, rideController.deleteRide);

export default ride;
