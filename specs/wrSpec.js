/**
 * Example tests of an Angular site
 */

var wrPage = require('../pages/wrPage');
var loginPage = require('../pages/loginPage');
var chance = require('chance').Chance();
var userData = require('../data/userData');
var ts = chance.timestamp();

describe ('wr app', function() {

    beforeEach(function() {
        loginPage.to();
        // browser.get('http://streamtv.net.ua/base/')
        loginPage.loginToPage();
        expect(loginPage.at()).toBeTruthy();
    });

    it('should add a new wr', function() {
        wrPage.addWr(userData.testWr, ts);
        wrPage.wrTab();
        wrPage.searchWr(ts);
        expect(wrPage.rows.count()).toBe(1);
        browser.sleep(5000);
    });

    it('should edit wr', function() {
        wrPage.editWr(ts,'last', 'updated' );
        expect(wrPage.tabWithWr(userData.testWr.last+ts, 'updated f.m.').isPresent());
    });

    it('should delete wr', function() {
        wrPage.deleteWr(ts);
        wrPage.wrTab();
        wrPage.searchWr(ts);
        expect(wrPage.rows.count()).toBe(0);
    });
});