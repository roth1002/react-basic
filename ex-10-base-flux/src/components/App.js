var React = require('react');
var Person = require('./Person');
var PersonStore = require('../stores/PersonStore');
var PersonActions = require('../actions/PersonActions');


function getPersonFromStore() {
  return {
    people: PersonStore.getPerson()
  }
}


var App =  React.createClass({
  componentWillMount() {
    console.log('will mount')
  },
  componentDidMount() {
    console.log('DidMount')
    PersonStore.onChange(this._onChange)
  },
  componentDidUnmount() {
    PersonStore.removeChangeListener(this._onChange)
  },
  getInitialState() {
    return getPersonFromStore()
  },

  render() {
    var timAge = 8
    return (
      <div>
        <button onClick={PersonActions.addTim}>Tim 加</button>
        <button onClick={PersonActions.addRoth}>Roth 加</button>
        <button onClick={PersonActions.addGoogle}>Google 加</button>
        {this.state.people.map(function(p, i) {
          return <Person name={p.name} age={p.age} index={i} />
        })}
      </div>
    )
  },

  _onChange() {
    console.log('onChange')
    this.setState(getPersonFromStore())
  }

})

module.exports = App;

