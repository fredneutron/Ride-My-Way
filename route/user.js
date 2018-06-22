import express from 'express';
import userValidate from '../helper/getId';
import userdb from '../Database/index.json';
import fs from 'fs';

const user = express.Router();
//get the list of user 
user.get('/users', (req,res) => {
	fs.readFile(_userdb,'utf8', (err,data) => {
		res.send(data.users);
	});
});
user.get('/users/:id', (req,res) => {
	fs.readFile(__dirname+'/../Database/index.json','utf8', (err,data) => {
		let obj = JSON.parse(data);
		let user = obj.users[req.params.id];
 		console.log( user );
 		res.send(JSON.stringify(user));
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
			let json = JSON.stringify(obj);
			fs.writeFile(__dirname+'/../Database/index.json', json, 'utf8', err => {
				if(err) throw err;
				console.log("file has been saved");
				console.log(id);
			});
			res.send(id);
    	}
	});
});
user.post('/authusers', (req,res) => {
	fs.readFile(__dirname+'/../Database/index.json','utf8', (err,data) => {
		let obj = JSON.parse(data);
		let n = userValidate(obj.users, req.body.logemail, req.body.logpass);
 		res.send(n);

	});
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