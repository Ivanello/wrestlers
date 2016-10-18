var basePage = require('./basePage.js');

var loginPage = function() {
    this.url = 'http://streamtv.net.ua/base/';
    this.pageLoaded = this.inDom($('a.ng-binding'));

    this.login=element(by.css('input[placeholder="Login"]'));
    this.password=element(by.css('input[placeholder="Password"]'));
    this.loginbtn=element(by.buttonText('Login'));

    this.loginToPage = function () {
        this.login.sendKeys('auto');
        this.password.sendKeys('test');
        this.loginbtn.click();
        // var phpsesid = browser.manage().getCookie('PHPSESSID')); });
    };
};
loginPage.prototype = basePage; // extend basePage...
module.exports = new loginPage();