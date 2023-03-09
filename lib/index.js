import express from 'express';
import path from 'path';
import Middleware from './Middleware/index';

const app = express();
//  connecting Middleware
Middleware.connect(app);
// render view
app.use(express.static(path.join(__dirname, '/.')));
// render files
app.use(express.static(path.join(__dirname, '/uploads')));
//  add listen port for server
app.listen(process.env.PORT || 8080);

export default app;
