import express from 'express';
import RideController from '../controllers/rides';

const ride = express.Router();
// get the list of ride
ride.get('/rides', RideController.get_all_rides);
ride.get('/rides/:id', RideController.get_ride_detail);

// add a ride
ride.post('/rides', RideController.add_ride);
// update a ride
ride.put('/rides/:id', RideController.edit_ride_detail);
// delete a ride
ride.delete('/rides/:id', RideController.delete_ride);

export default ride;
