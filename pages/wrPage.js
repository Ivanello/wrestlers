var basePage = require('./basePage.js');

var wrPage = function () {
    this.url = 'http://streamtv.net.ua/base/';
    this.pageLoaded = this.inDom($('a.ng-binding'));

    this.login = element(by.css('input[placeholder="Login"]'));
    this.password = element(by.css('input[placeholder="Password"]'));
    this.loginbtn = element(by.buttonText('Login'));

    this.newWrBtn = element(by.css('button[ng-click="newWrestler()"]'));
    this.searchField = element(by.model('searchFor'));
    this.searchWrBtn = element(by.css('button[ng-click="searchWrestler(searchFor)"]'));
    this.saveWrBtn = element(by.css('button[ng-click="save(); fWrestler.$setPristine()"]'));
    this.delWrBtn = element(by.css('button[ng-click="delete()"]'));
    this.confirmWrBtn = element(by.css('button[ng-click="ok()"]'));
    this.cancelConfirmWrBtn = element(by.css('button[ng-click="cancel()"]'));
    // this.closeTabBtn = function (name) {return element(by.css("div:contains('name') div.close-it"));};
    this.closeTabBtn = element.all(by.css('div.close-it')).get(1);
    this.wrBtn = element(by.css('div.tab-heading'));

    this.last = element(by.css('fg-input[value="wr.lname"] div input'));
    this.first = element(by.css('fg-input[value="wr.fname"] div input'));
    this.middle = element(by.css('fg-input[value="wr.mname"] div input'));
    this.dob = element(by.css('fg-date[value="wr.dob"] div input'));
    this.region = element(by.css('fg-select[value="wr.region1"] div select'));
    this.fst = element(by.css('fg-select[value="wr.fst1"] div select'));
    this.style = element(by.css('fg-select[value="wr.style"] div select'));
    this.age = element(by.css('fg-select[value="wr.lictype"] div select'));
    this.year = element(by.css('fg-select[value="wr.expires"] div select'));

    this.listElement = function (text) {return element(by.cssContainingText('td.ng-binding', text));};

    this.loginToPage = function () {
        this.login.sendKeys('auto');
        this.password.sendKeys('test');
        this.loginbtn.click();
    };

    this.friendName = function (text) {return element.all(by.cssContainingText('td.ng-binding', text));};

    this.tabWithWr = function (text) {return element(by.cssContainingText('div', text));};
    // results...
    this.rows = element.all(by.repeater('wrestler in wrestlers'));

    this.names = element.all(by.repeater('wrestler in wrestlers').column('{{row}}'));


    /**
     * search for a friend
     *
     * @param  {string} string
     */
    this.searchFor = function (string) {
        this.searchBox.sendKeys(string);
    };

    /**
     * add a friend
     *
     * @param userObj
     */
    this.addWr = function (userObj, ts) {
        this.newWrBtn.click();
        this.fillWrData(userObj, ts);
        this.saveWrBtn.click();
        this.closeTab();
    };

    this.fillWrData = function (userObj, ts) {
        this.last.sendKeys(userObj.last + ts);
        this.first.sendKeys(userObj.first);
        this.middle.sendKeys(userObj.middle);
        this.dob.sendKeys(userObj.dob);
        this.region.element(By.cssContainingText('option', userObj.region)).click();
        this.fst.element(By.cssContainingText('option', userObj.fst)).click();
        this.style.element(By.cssContainingText('option', userObj.style)).click();
        this.age.element(By.cssContainingText('option', userObj.age)).click();
        this.year.element(By.cssContainingText('option', userObj.year)).click();
    };

    this.searchWr = function (ts) {
        this.searchField.sendKeys('last', ts);
        this.searchWrBtn.click();
        // this.listElement('last' + ts + 'updated first middle').click();
    };

    this.editWr = function (ts, field, value) {
        this.searchWr(ts);
        this.rows.click();
        this.last.sendKeys(value);
        this.saveWrBtn.click();
    };

    this.deleteWr = function (ts) {
        this.searchWr(ts);
        this.rows.click();
        this.delWrBtn.click();
        this.confirmWrBtn.click();
    };

    this.closeTab = function () {
        this.closeTabBtn.click();
    };

    this.wrTab = function () {
        this.wrBtn.click();
    };
};
wrPage.prototype = basePage; // extend basePage...
module.exports = new wrPage();

