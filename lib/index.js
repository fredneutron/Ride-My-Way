import express from 'express';
import Middleware from './Middleware/index';

const app = express();
//  connecting Middleware
Middleware.connect(app);
//  add listen port for server
app.listen(process.env.PORT || 3000);

export default app;
