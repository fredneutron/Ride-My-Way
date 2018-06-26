import crypto from 'crypto';

const blowFish = (text, key) => {
  const decipher = crypto.createCipheriv('bf-cbc', key, 'ridewayway');
  let encrypted = decipher.update(text, 'utf-8', 'base64');
  encrypted += decipher.final('base64');
  return encrypted;
};

export default blowFish;
