import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generate = (db) => {
  return jwt.sign(
    {
      id: db.id,
      email: db.user_email,
    },
    process.env.JWT_KEY,
    {
      expiresIn: '1d',
    },
  );
};

export default generate;
