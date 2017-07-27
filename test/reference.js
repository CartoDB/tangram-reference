var expect = require('chai').expect
var reference = require('../1.0.0/reference.json');

describe('1.0.0', function () {
    describe('Should not have unsupported properties', function () {
        it('markers.file', function () {
            expect(reference.symbolizers.markers.file).to.be.undefined;
        });
        it('markers.comp-op.type["multiply"]', function () {
            expect(reference.symbolizers.markers['comp-op'].type).to.not.include('multiply');
        });
    });
});