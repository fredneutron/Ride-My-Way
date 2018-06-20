import express from 'express';

const driver = express.Router();
//get the list of driv 
driver.get('/drivers', (req,res) => {
	res.send({type: 'GET'});
});
//add a driver
driver.post('/drivers', (req,res) => {
	console.log(req.body);
	//res.send();
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