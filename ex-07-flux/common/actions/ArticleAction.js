var dispatcher = require('../dispatcher'),
    fetch = require('../utils/fetch');

module.exports = {
  all: function() {
    return fetch('/').then(function(res) {
      return res.json();
    }).then(function(data) {
      dispatcher.dispatch({actionType: 'SET_ARTICLES', data: data});
    });
  },

  get: function(id) {
    return fetch('/post/' + id).then(function(res) {
      return res.ok ? res.json() : Promise.reject('Not found');
    }).then(function(data) {
      dispatcher.dispatch({actionType: 'SET_ARTICLE', data: data});
    });
  }
};
