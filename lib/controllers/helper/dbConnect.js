import { Pool } from 'pg';

// localhost connection
// const pool = new Pool({
//   host: 'localhost',
//   port: 5432,
//   user: 'admin',
//   password: 'Password34',
//   database: 'ride_my_way',
// });
// remote connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;
