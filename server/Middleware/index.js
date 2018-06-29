import bodyParser from 'body-parser';
import user from '../route/user';
import ride from '../route/ride';

const Middleware = (app) => {
  app.use(bodyParser.json());
  // public the view
  // app.use(express.static('View'));
  // initialise routes
  app.use('/api/v1', user);
  app.use('/api/v1', ride);
};

export default Middleware;