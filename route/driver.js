import express from 'express';
import fs from 'fs';

const driver = express.Router();
//get the list of driv 
driver.get('/drivers', (req,res) => {
	res.send({type: 'GET'});
});
//add a driver
driver.post('/drivers', (req,res) => {
	fs.readFile(__dirname+'/../Database/index.json','utf8', (err, data) => {
		if (err){
        	console.log(err);
    	} else {
    		let obj = JSON.parse(data);
    		console.log("drivers = "+ req.body.id);
    		//let id = "user" + (Object.keys(obj.users).length + 1);
			obj.drivers[req.body.id] = req.body;
			console.log("driver id = "+obj.drivers[req.body.id]);
			let json = JSON.stringify(obj);
			fs.writeFile(__dirname+'/../Database/index.json', json, 'utf8', err => {
				if(err) throw err;
				console.log("file has been saved");
			});
			res.send(req.body.id);
    	}
	});
});
//update a driver
driver.put('/drivers/:id', (req,res) => {
	res.send({type: 'PUT'});
}); 
//delete a driver
driver.delete('/drivers/:id', (req,res) => {
	res.send({type: 'DELETE'});
});

export default driver;