import express from 'express';
import md5 from '../helper/md5';
import userdb from '../Database/index.json';

const user = express.Router();
//get the list of user 
user.get('/users', (req,res) => {
	//res(userdb.users.req.);
	console.log(req.params.id);
	res.send(req.params.id);
});
user.get('/getusers/:id', (req,res) => {
	//res(userdb.users.req.);
	console.log(req.params.id);
	res.end(req.id);
});
//
//add a user
user.post('/users', (req,res) => {
	//let pass = blowFish(req.body.password,req.body.dob);
	console.log(req.body);
	let newUser = {
		"name": req.body.name,
		"email": req.body.email,
		"gender": req.body.gender,
		"dob": req.body.dob,
		"picture": "",
		"password": req.body.password,
		"userType": req.body.userType
	};
	//res.send(req.body.name);
	let id = req.body.name + Math.floor((Math.random() * 6000) + 1);
	console.log(id);
	userdb.users.id = req.body;
	res.send(id);
	console.log(userdb);
});
user.post('/getuserdetails', (req,res) => {
	console.log(userdb.users[req.id]);
	res.send(userdb.users[req.id]);

});
//update a user
user.put('/users/:id', (req,res) => {
	res.send({type: 'PUT'});
}); 
//delete a user
user.delete('/users/:id', (req,res) => {
	console.log(req.params.id); 
	res.send({type: 'DELETE'});
});

export default user;