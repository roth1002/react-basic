var React = require('react');
var Hello = React.createClass({

	getInitialState: function(){
		return { name : 'Roth' };
	},

	update: function (e) {
		this.setState( {name : e.target.value} );
	},

    render: function () {
        return (
        	<div>
        		<input type="text" onChange={this.update} />
        		<h1>Hello {this.props.name + ' ' + this.state.name }</h1>
        	</div>
        )
    }
});

React.render(<Hello name="World" />, document.getElementById('container'));