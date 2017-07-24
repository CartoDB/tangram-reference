var expect = require('chai').expect

describe('1.0.0', function () {
    var reference = require('../1.0.0/reference.json');
    describe('Should not have unsupported properties', function () {
        it('markers.file', function () {
            expect(reference.symbolizers.markers.file).to.be.undefined;
        });
    });
});