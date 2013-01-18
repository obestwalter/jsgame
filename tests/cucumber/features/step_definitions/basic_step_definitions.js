
var sharedSteps = module.exports = function () {
  this.World = require("../support/world").World;

  this.Then(/^I should be on "([^"]*)"$/, function(url, next) {
    if (url.substring(0, 4) !== "http") {
      url = this.browser.site + url
    }
    this.browser.location.href.should.be.eql(url)
    next()
  });

  this.Then(/^I should be on a url that includes "([^"]*)"$/, function(url, next) {
    if (url.substring(0, 4) !== "http") {
      url = this.browser.site + url
    }
    this.browser.location.href.should.include(url)
    next()
  });
    
  this.Given(/^I am on "([^"]*)"$/, function(url, next) {
    this.browser.headers.referer = this.browser.site + url
    this.browser.visit(url, function(error, browser, status, errors) {
      if (error)
        console.log(error)

      browser.wait(5000, next)
    })
  });

  this.When(/^I click on the "([^"]*)" button$/, function(button_id, next) {
    var that = this
    this.browser.pressButton(button_id, function() {
      next()
    })
  });
  
  this.When(/^I click on the "([^"]*)" link$/, function(link_id, next) {
    this.browser.clickLink(link_id, function() {
      next()
    })
  });
  
  this.Then(/^I should see "([^"]*)"$/, function(text, next) {
    this.browser.html().should.include(text)
    next()
  });
  
  this.Then(/^I should not see "([^"]*)"$/, function(text, next) {
    this.browser.html().should.not.include(text)
    next()
  });

  this.Then(/^"([^"]*)" should be hidden$/, function(selector, next) {
    this.browser.html(selector+ '[style="display: none;"]').should.not.be.empty
    next()
  });

  this.Then(/^"([^"]*)" should be visible$/, function(selector, next) {
    this.browser.html(selector+ '[style="display: none;"]').should.be.empty
    next()
  });
    
  this.Then(/^the page should have an element: "([^"]*)"$/, function(selector, next) {
    this.browser.html(selector).should.not.be.empty
    next()
  });
  
  this.Then(/^the page should not have an element: "([^"]*)"$/, function(selector, next) {
    this.browser.html(selector).should.be.empty
    next()
  });
  
  this.Then(/^I should see "(.*)" as the page title$/, function(title, next) {
    this.browser.text('title').should.include(title)
    next()
  });

  this.Then(/^I should see the Inqob header with "([^"]*)" image and link "([^"]*)"$/, function(image_color, link_text, next) {
    this.browser.html(".__inqob_header>a").should.include(link_text)
    this.browser.html(".__inqob_header>a>img[src$='images/logo-"+ image_color +"-pink-small.png']").should.not.be.empty
    next()
  });

  this.Then(/^I should see the Inqob footer without link$/, function(next) {
    this.browser.html(".__inqob_footer>a").should.include('display: none;')
    next()
  });

  this.When(/^I enter "([^"]*)" into "([^"]*)"$/, function(text, input_box_id, next) {
    this.browser.fill(input_box_id, text, next)
  });
};
