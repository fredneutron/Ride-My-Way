import chai from 'chai';
import userValidate from '../../../controllers/helper/userValidate';

const assert = chai.assert;
// cross-env NODE_ENV=test mocha '/**/*.test.js'
describe('userValidate', () => {
  it('userValidate should return number', () => {
    const result = userValidate();
    assert.typeOf(result, 'number');
  });
});

