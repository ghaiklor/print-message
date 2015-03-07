var assert = require('assert'),
    getLength = require('../../lib/util/getLength');

describe('util:getLength', function () {
    it('Should properly get length of string', function () {
        assert.equal(getLength('abc'), 3);
        assert.equal(getLength('фыва'), 4);
    });
});
