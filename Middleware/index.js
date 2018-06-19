import bodyParser from 'body-parser';
import routes from '../route/user';
import express from 'express';

const Middleware = (app) => {
	bodyParser.json();
	express.static('../View/');
	app.use('/api', routes);
}

export default Middleware;