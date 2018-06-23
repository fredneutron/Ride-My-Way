import express from 'express';
import userValidate from '../helper/userValidate';
import fs from 'fs';

const user = express.Router();
//get the list of user 
user.get('/users', (req,res) => {
	fs.readFile(__dirname+'/../Database/index.json','utf8', (err,data) => {
		let obj = JSON.parse(data);
		res.send(obj.users);
	});
});
user.get('/getusers/:id', (req,res) => {
	fs.readFile(__dirname+'/../Database/index.json','utf8', (err,data) => {
		let obj = JSON.parse(data);
		let user = obj.users[req.params.id];
 		console.log(user);
 		res.end(JSON.stringify(user));
	});
});
//
//add a user
user.post('/users', (req,res) => {
	fs.readFile(__dirname+'/../Database/index.json','utf8', (err, data) => {
		if (err){
        	console.log(err);
    	} else {
    		let obj = JSON.parse(data);
    		let id = "user" + (Object.keys(obj.users).length + 1);
			obj.users[id] = req.body;
			console.log("users ="+req.body);
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
user.post('/authusers', (req,res) => {
	fs.readFile(__dirname+'/../Database/index.json','utf8', (err,data) => {
		let obj = JSON.parse(data);
		console.log(req.body);
		let n = userValidate(obj.users, req.body.user, req.body.pass);
		console.log(n);
 		res.send({key : n});
	});
});
//update a user
user.put('/users/:id', (req,res) => {
	fs.readFile(__dirname+'/../Database/index.json','utf8', (err, data) => {
		if (err){
        	console.log(err);
    	} else {
    		let obj = JSON.parse(data);
			obj.users[req.params.id] = req.body;
			console.log("users ="+req.body);
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
//delete a user
user.delete('/users/:id', (req,res) => {
	console.log(req.params.id); 
	res.send({type: 'DELETE'});
});

export default user;