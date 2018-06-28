import express from 'express';
import { getRideSearch, getAllRides, getRideDetail, addRide, deleteRide, editRideDetail } from '../controllers/rides';

const ride = express.Router();
// get the list of ride
ride.get('/rides', getAllRides);
// get rides for a user
ride.get('/rides/:id', getRideDetail);
// add a ride
ride.post('/rides', addRide);
// ride search
ride.post('/rideSearch', getRideSearch);
// update a ride
ride.put('/rides/:id', editRideDetail);
// delete a ride
ride.delete('/rides/:id', deleteRide);

export default ride;
