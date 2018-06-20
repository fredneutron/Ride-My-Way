import bodyParser from 'body-parser';
import user from '../route/user';
import driver from '../route/driver';
import express from 'express';

const Middleware = (app) => {
	app.use(bodyParser.json());
	//public the view
	app.use(express.static('View'));
	//initialise routes
	app.use('/api/v1', user);
	app.use('/api/v1', driver);
}

export default Middleware;