import express from 'express';

const router = express.Router();
//get the list of ride 
router.get('/rides', (req,res) => {
	res.send({type: 'GET'});
});
//add a ride
router.post('/rides', (req,res) => {
	console.log(req.body);
	res.send({
		type: 'POST',
		name: req.body.name,
		rank: req.body.rank
	});
});
//update a ride
router.put('/rides/:id', (req,res) => {
	res.send({type: 'PUT'});
}); 
//delete a ride
router.delete('/rides/:id', (req,res) => {
	res.send({type: 'DELETE'});
});

export default router;