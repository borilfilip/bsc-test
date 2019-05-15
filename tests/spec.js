describe('bsc-test homepage', function() {
    it('should has the first item equal to "Jogging in park"', function() {
        browser.get('http://localhost:3000/');

        expect(element(by.id('item-1')).getText()).
        toEqual('Jogging in park');
    });
});
