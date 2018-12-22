import express from 'express';
import Middleware from './Middleware/index';

const app = express();
//  connecting Middleware
Middleware.connect(app);
// render view
app.use(express.static('public'));
// render files
app.use(express.static('uploads'));
//  add listen port for server
app.listen(process.env.PORT || 2000);

export default app;
