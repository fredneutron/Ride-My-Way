import { Client } from 'pg';

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'admin',
  password: 'Password34',
  database: 'ride_my_way',
});

export default client;
