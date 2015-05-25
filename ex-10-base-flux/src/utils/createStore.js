var EventEmitter = require('events').EventEmitter
var assign = require('object-assign')

var CHANGE_EVENT = 'change'

module.exports = function(attributes) {
  return assign({}, EventEmitter.prototype, {

    emitChange() {
      this.emit(CHANGE_EVENT)
    },

    addChangeListener(callback) {
      this.on(CHANGE_EVENT, callback)
    },

    onChange(callback) {
      this.addChangeListener(callback)
    },

    removeChangeListener(callback) {
      this.removeListener(CHANGE_EVENT, callback)
    }

  }, attributes)
}
