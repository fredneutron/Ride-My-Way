import express from 'express';
import userValidate from '../helper/userValidate';
import fs from 'fs';

const ride = express.Router();
//get the list of ride 
ride.get('/rides', (req,res) => {
	fs.readFile(__dirname+'/../Database/index.json','utf8', (err,data) => {
		let obj = JSON.parse(data);
		res.send(obj.rides);
	});
});
ride.get('/rides/:id', (req,res) => {
	fs.readFile(__dirname+'/../Database/index.json','utf8', (err,data) => {
		let obj = JSON.parse(data);
		let user = obj.rides[req.params.id];
 		console.log( user );
 		res.end(JSON.stringify(user));
	});
});
//
//add a ride
ride.post('/rides', (req,res) => {
	fs.readFile(__dirname+'/../Database/index.json','utf8', (err, data) => {
		if (err){
        	console.log(err);
    	} else {
    		let obj = JSON.parse(data);
    		let id = "ride" + (Object.keys(obj.ride[req.body.id]).length + 1);
			obj.ride[req.body.id].ride[id] = {
				"location": req.body.location,
				"destination": req.body.destination,
				"date": req.body.date,
				"time": req.body.time
			};
			console.log("rides ="+req.body);
			let json = JSON.stringify(obj);
			fs.writeFile(__dirname+'/../Database/index.json', json, 'utf8', err => {
				if(err) throw err;
				console.log("file has been saved");
				console.log(id);
			});
			res.send({key : id});
    	}
	});
});
//update a ride
ride.put('/rides/:id', (req,res) => {
	res.send({type: 'PUT'});
}); 
//delete a ride
ride.delete('/rides/:id', (req,res) => {
	console.log(req.params.id); 
	res.send({type: 'DELETE'});
});

export default ride;