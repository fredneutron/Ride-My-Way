import express from 'express';
import Middleware from './Middleware/index';

const app = express();

//  connecting Middleware
Middleware(app);
//  add listen port for server
app.listen(process.env.PORT || 2000);

export default app;
