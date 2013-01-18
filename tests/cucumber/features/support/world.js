
var zombie = require('zombie')
  , HTML5  = require('html5')
  , should = require('should')

// Check this for setting headers: https://gist.github.com/33e996f35b5f2e8abbae
  
var World = function World(callback) {
  this.browser = new zombie.Browser({ 
    runScripts: true, 
    debug: false, 
    htmlParser: HTML5,
    maxWait: 5000,
    waitFor:  15000,
    userAgent: 'Chrome/24.0.1295.0'
  });

  this.browser.site = process.env.FULL_URL

  callback()
};
exports.World = World;
