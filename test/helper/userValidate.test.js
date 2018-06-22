import chai from 'chai';
import userValidate from '../../helper/userValidate';
let assert = chai.assert; 
//cross-env NODE_ENV=test mocha '/**/*.test.js'
describe('userValidate', () => {
	it('userValidate should return string', () => {
		let result = userValidate();
		assert.typeOf(result, 'string');
	});
});

