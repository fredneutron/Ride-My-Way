import express from 'express';
import userSet from '../model/user';
import userdb from '../Database/index.js';

const user = express.Router();
//get the list of ride 
user.get('/users', (req,res) => {
	res.send(userdb.users);
});
//add a ride
user.post('/users', (req,res) => {
	//let userSet = new userSet(req.body);
	console.log(userSet);
	let newUser = {
		"name": req.body.name,
		"email": req.body.email,
		"gender": req.body.gender,
		"dob": req.body.dob,
		"picture": "",
		"password": req.body.password,
		"userType": req.body.userType
	};
	userdb.users.push(newUser);
	res.send(""+userdb.users.indexOf(userdb.users.filter(x => x == newUser))+"");
});
//update a ride
user.put('/users/:id', (req,res) => {
	res.send({type: 'PUT'});
}); 
//delete a ride
user.delete('/users/:id', (req,res) => {
	console.log(req.params.id); 
	res.send({type: 'DELETE'});
});

export default user;