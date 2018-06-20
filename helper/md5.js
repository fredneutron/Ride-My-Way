import crypto from 'crypto';

const md5 = (data) => {
	return crypto.createHash('md5').update(data).digest("hex");
}

export default md5;