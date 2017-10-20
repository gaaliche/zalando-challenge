var CartPage = (function() {
    function CartPage() {
        var addToWishList = '.z-coast-fjord_interactable'
        var quantityDropBox = '.z-coast-fjord_quantitySelect'
        this.checkelements = function () {
            browser.waitForVisible(quantityDropBox, 3000)
        	browser.waitForVisible(addToWishList, 3000)
        }
        this.addProductToCart = function() {
        	return browser
        		.click(addToCartButton)
        }
        this.changeQuantity = function () {
            return browser
                .click(quantityDropBox)
                .element(quantityDropBox).selectByVisibleText('2')
                testText = browser.getText(quantityDropBox)
                expect(testText).toEqual('2')                  

        }
        this.addToWishList = function() {
            return browser
                .click(addToWishList)
        }
        this.goToWishListPage = function () {
            return browser
                .url('https://zalando.de/wishlist/')
        }
    };

    return CartPage;

})();

module.exports = CartPage;