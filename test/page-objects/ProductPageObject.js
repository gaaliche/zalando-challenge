var ProductPage = (function() {
    function ProductPage() {
        var addToCartButton = '#z-pdp-topSection-addToCartButton';
        var productName = 'h1.h-text';
        var cartButton = 'div.z-navicat-header_userAccNaviItem:nth-child(5)'
        this.checkelements = function () {
            browser.waitForVisible(productName, 3000)
            browser.waitForVisible(addToCartButton, 3000)
        	browser.waitForVisible(cartButton, 3000)
        }
        this.addProductToCart = function() {
        	return browser
        		.click(addToCartButton)
        }
        this.goToCart = function() {
        	browser.click(cartButton)
        }
    };

    return ProductPage;

})();

module.exports = ProductPage;


