import morgan from 'morgan';
import bodyParser from 'body-parser';
import aglio from 'aglio';
import path from 'path';
import user from '../route/user';
import ride from '../route/ride';

export default class Middleware {
  static connect(app) {
    // converting documentation to html
    const options = {
      themeVariables: 'slate',
    };
    aglio.renderFile('apiary.apib', path.join(__dirname, '/../index.html'), options, (err, warnings) => {
      if (err) return err;
      if (warnings) return warnings;
    });

    // header settings
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-width, Content-Type, Accept, Authorization',
      );
      if (req.method === 'OPTIONS') {
        res.header(
          'Access-Control-Allow-Methods',
          'GET, POST, PUT, DELETE',
        );
        return res.status(200).json({});
      }
      next();
    });

    // Handling endpoint errors
    app.use((error, req, res, next) => {
      res.status(error.status || 500).json({
        error: {
          message: error.message,
        },
      });
      next();
    });

    // use this module to handle endpoint errors
    app.use(morgan('dev'));

    // parsing requests and restricting it to only json
    app.use(bodyParser.json());
    // parsing requests and restricting it form-data
    // app.use(bodyParser.urlencoded({ extended: false }));

    // initialise routes
    app.use('/api/v1', user);
    app.use('/api/v1', ride);
  }
}
