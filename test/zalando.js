var HomePageObject = require("./page-objects/HomePageObject.js")
var LoginPageObject = require("./page-objects/LoginPageObject.js")
var ProductPageObject = require("./page-objects/ProductPageObject.js")
var CartPageObject = require("./page-objects/CartPageObject.js")
var WishListPageObject = require("./page-objects/WishListPageObject.js")
describe('Zalando QA Challenge', function(){
    var home = new HomePageObject()
    var login = new LoginPageObject()
    var product = new ProductPageObject()
    var cart = new CartPageObject()
    var wishlist = new WishListPageObject()
    beforeAll(function () {
        login.checkelements()
        login.userLogin()
        home.checkelements()
    });

    it('User can add product to cart', function () {
        home.searchProduct()
        product.checkelements()
        product.addProductToCart()
    });

    it('User can change quantiy of a product in cart', function () {
        product.goToCart()
        cart.checkelements()
        cart.changeQuantity()
    });

    it('User can add a product to wishlist', function() {
        cart.addToWishList()
        cart.goToWishListPage()
        wishlist.checkelements()
    });

    afterAll(function () {
        wishlist.removeProductFromWishList()
    })

});