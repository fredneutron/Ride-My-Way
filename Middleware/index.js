import morgan from 'morgan';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import user from '../route/user';
import ride from '../route/ride';

export default class Middleware {
  static connect(app) {
    // use this module to handle endpoint errors
    app.use(morgan('dev'));
    // parsing requests and restricting it to only json
    app.use(bodyParser.json());
    // app.use((req, res) => {
    //   res.header('Access-Control-Allow-Origin', '*');
    //   res.header(
    //     'Access-Control-Allow-Headers',
    //     'Origin, X-Requested-width, Content-Type, Accept, Authorization',
    //   );
    //   if (req.method === 'OPTIONS') {
    //     res.header(
    //       'Access-Control-Allow-Methods',
    //       'GET, POST, PUT, DELETE',
    //     );
    //     return res.status(200).json({});
    //   }
    // });
    // public the view
    // app.use(express.static('View'));
    // initialise routes
    // app.use('/', (req, res) => {
    //   res.status(200).json({ message: 'Welcome' });
    // });
    app.use('/api/v1', user);
    app.use('/api/v1', ride);
    // Handling endpoint errors
    // app.use((error, req, res) => {
    //   res.status(error.status || 500);
    //   res.json({
    //     message: error.message,
    //   });
    // });
  }
  // validating web token
  // static validate(req, res) {
  //   try {
  //     const token = req.headers.authorization.split(' ')[1];
  //     res.auth = jwt.verify(token, process.env.JWT_KEY);
  //   } catch (error) {
  //     return res.status(200).json({
  //       message: 'Auth failed',
  //     });
  //   }
  // }
}
