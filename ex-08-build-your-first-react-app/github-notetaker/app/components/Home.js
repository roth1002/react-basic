var React = require('react');

var Home = React.createClass({
	render: function(){
		return (
			<h2 className="text-center">
				Search by Github Username Above
			</h2>
		)
	}
});

module.exports = Home;

//React.render(<Main />, document.getElementById('app'));