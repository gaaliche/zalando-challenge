var HomePage = (function() {

    function HomePage() {
        var searchField = '#searchContent'
        var searchButton = '#searchButtonTop'
        var product = 'DK151H09R-Q11'
        this.searchProduct = function() {
        	return browser
                .click(searchField)
        		.setValue(searchField, product)
                .click(searchButton)
        }

        this.checkelements = function () {
        	browser.waitForVisible(searchField, 8000)
        
        }
    };

    return HomePage;

})();

module.exports = HomePage;