define([
    'fixture',
    'should',
    'jquery',
    'assets/components/example/example'], function(fixture, should, $, codeUnderTest) {

    var fixtureNode;

    beforeEach(function() {
        fixtureNode = fixture.setup('<label>label!!</label>');

        codeUnderTest.init();
    });

    afterEach(function() {
        fixture.teardown();
    });

    describe('carousel', function() {
        it('should have a label', function() {
            var labelText = $('label', fixtureNode).text();
            labelText.should.equal('label!!');
        });
    });

});
