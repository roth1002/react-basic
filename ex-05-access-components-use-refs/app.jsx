var React = require('react');

var App = React.createClass({

	getInitialState: function () {
		return {
			red: 0,
			green: 0,
			blue: 0
		}
	},

	update: function () {
		this.setState({
			red: this.refs.red.refs.input.getDOMNode().value,
			green: this.refs.green.refs.input.getDOMNode().value,
			blue: this.refs.blue.refs.input.getDOMNode().value
		});
	},

	render: function () {
		return (
			<div>
				<Slider ref="red" update={this.update}></Slider>
				<label>{this.state.red}</label>
				<Slider ref="green" update={this.update}></Slider>
				<label>{this.state.green}</label>
				<Slider ref="blue" update={this.update}></Slider>
				<label>{this.state.blue}</label>
			</div>
		);

	}
});


var Slider = React.createClass({
	render: function () {
		return (
			<div>
				<input ref="input" type="range" min="0" max="255" onChange={this.props.update} />
			</div>
		);
	}

});

React.render(<App></App>, document.body);
