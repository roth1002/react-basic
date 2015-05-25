var React = require('react');



var Person =  React.createClass({
  componentWillReceiveProps() {
    console.log('receive props')
  },
  componentWillUpdate() {
    console.log('will update')
  },
  getDefaultProps() {
    return {
      name: 'Tim'
    }
  },
  shouldComponentUpdate(nextProps, nextState) {
    return !((this.props.name === nextProps.name) &&
    (this.props.age === nextProps.age))
  },
  render() {
    var style = { color: 'rgb(' + this.props.index * 20 + ',' +
       ( '' + (255 - this.props.index * 20)) + ',0)' }
    return (
      <div style={style}>{this.props.name + ' ' +
        this.props.age + ' years old'}</div>
    )
  }

})

module.exports = Person;
