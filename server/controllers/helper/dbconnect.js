import { Client } from 'pg';

const client = new Client({
  host: 'ec2-23-23-220-19.compute-1.amazonaws.com',
  port: 5432,
  user: 'vymumfzhkfuoqv',
  password: '01aedc4d06f6260a361155fa3f9e4beff0032ecef2a2c8361d856ca821a96ab5',
  database: 'dajhc458kpo4oh',
});

export default client;
