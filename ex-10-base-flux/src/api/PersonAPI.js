var request = require('superagent');
var Promise = require('bluebird');


module.exports = {
  addGoogle() {
    return new Promise(function(resolve, reject) {
      request
      .get('http://www.google.com.tw')
      .end(function(err, res) {
        resolve(true);
      })
    })
  }
};
