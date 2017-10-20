var LoginPage = (function() {
    function LoginPage() {
		var loginButton = 'button.z-button'
		var user = '[name="login.email"]'
		var password = '[name="login.password"]'
        var url = "https://zalando.de/login"
        var email = 'zalando-challenge@yopmail.com'
        var pwd = 'zalando-challenge'
        this.userLogin = function() {
        	return browser
            	.setValue(user, email)
            	.setValue(password, pwd)
            	.click(loginButton)

        }
        this.checkelements = function () {
        	browser.url(url)
        	browser.windowHandleMaximize()
            browser.waitForVisible(user, 3000)
            browser.waitForVisible(password, 3000)
            browser.waitForVisible(loginButton, 3000)
        
        }
	};

    return LoginPage;

})();

module.exports = LoginPage;