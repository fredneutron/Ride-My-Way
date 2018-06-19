import express from 'express';
import routes from './route/user';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(express.static('View'));
//initialise routes
app.use('/api/v1', routes);
//add listen port for server
app.listen(process.env.port || 4000, () => {
  console.log('listening now');
});