import crypto from 'crypto';

const blowFish = (text,key) => {
	let decipher = crypto.createCipheriv('bf-cbc', key, 'ridewayway');
	let encrypted = decipher.update(text, 'utf-8', "base64");
	return encrypted += decipher.final('base64');
}

export default blowFish;