var React = require('react');
var Hello = React.createClass({

	getInitialState: function(){
		return { name : 'Roth' };
	},

    render: function() {
        return <div>Hello {this.props.name + ' ' + this.state.name }</div>;
    }
});

React.render(<Hello name="World" />, document.getElementById('container'));