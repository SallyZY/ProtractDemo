var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var testAmazonWrapper = function(){

    this.Given(/^I go to Baidu$/, function(next) {
        browser.driver.navigate().to("http://www.baidu.com/");
        next();
    });

    this.When(/^I search book "([^"]*)"/, function(book, next) {
        console.log("When");
        browser.driver.findElement(By.id("kw")).sendKeys(book);
        browser.driver.findElement(By.id("su")).click();
        next();
    });

    this.Then(/^I should see the book "([^"]*)" in search result$/, function(book,next) {
        console.log("Then");
        chai.expect(browser.driver.findElement(By.id("kw"))).to.exist;
        next();
    });
};

module.exports = testAmazonWrapper;