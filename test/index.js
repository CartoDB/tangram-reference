var tangramReference = require('../index.js');
var assert = require('chai').assert;

describe('reference', function () {
    describe('Should export a load function making the reference availiable', function () {
        it('should export a load function', function () {
            assert.isDefined(tangramReference.load);
        });
        it('should export a version 1.0.0', function () {
            var actual = tangramReference.load('1.0.0').version;
            var expected = '1.0.0';
            assert.equal(actual, expected);
        });
    });
});