import express from 'express';
import Middleware from './Middleware/index';
import helper from './controllers/helper';

const app = express();
//  connecting Middleware
Middleware.connect(app);
// configuring environmental variables
helper.config();
//  add listen port for server
app.listen(process.env.PORT || 3000);

export default app;
