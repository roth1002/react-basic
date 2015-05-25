var createStore = require('../utils/createStore');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var _person = [{
  name: 'Tim', age: 18
}, {
  age: 19
}, {
  name: 'Randy', age: 20
}, {
  name: 'Chiara', age: 10
}]

var PersonStore = createStore({
  getPerson() {
    return _person
  }
});


AppDispatcher.register(function(action) {
  switch (action.type) {
    case 'TimAdded':
      _person.push({
        name: 'Tim', age: 18
      })
      PersonStore.emitChange()
      break;
    case 'RothAdded':
      _person.push({
        name: 'Roth', age: 18
      })
      PersonStore.emitChange()
      break;
    case 'GoogleResponse':
      _person.push({
        name: 'Google', age: 18
      })
      PersonStore.emitChange()
      break;
    default:

  }
})



module.exports = PersonStore;


// setInterval(function() {
//   _person.push({
//     name: 'Tim', age: 18
//   })
//   console.log(_person)
//   PersonStore.emitChange();
// }, 1000)
