var AppDispatcher = require('../dispatcher/AppDispatcher');
var PersonAPI = require('../api/PersonAPI');

module.exports = {

  addTim() {
    AppDispatcher.dispatch({
      type: 'TimAdded'
    })
  },
  addRoth() {
    AppDispatcher.dispatch({
      type: 'RothAdded'
    })
  },
  addGoogle() {
    PersonAPI.addGoogle()
    .then(function() {
      AppDispatcher.dispatch({
        type: 'GoogleResponse'
      })
    })
  }
};
