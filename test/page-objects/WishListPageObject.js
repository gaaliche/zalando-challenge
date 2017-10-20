var WishListPage = (function() {
    function WishListPage() {
        var productName = '.z_wishlist_card-info__info_brandName___148OF';
        var removeFromWishListButton = '.z_wishlist_ArticleCard__icon_close___ynls0'
        this.checkelements = function () {
            browser.waitForVisible(productName, 3000)
            browser.waitForVisible(removeFromWishListButton, 3000)
        }
        this.removeProductFromWishList = function () {
            return browser
                .click(removeFromWishListButton)
        }

    };

    return WishListPage;

})();

module.exports = WishListPage;