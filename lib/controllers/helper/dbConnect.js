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
  host: 'ec2-23-23-220-19.compute-1.amazonaws.com',
  port: 5432,
  user: 'vymumfzhkfuoqv',
  password: '01aedc4d06f6260a361155fa3f9e4beff0032ecef2a2c8361d856ca821a96ab5',
  database: 'dajhc458kpo4oh',
  ssl: true,
});

export default pool;
