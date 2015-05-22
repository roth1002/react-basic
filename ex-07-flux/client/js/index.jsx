var React = require('react');
require('../css/client.css');

var App = React.createClass({

	render: function () {
		var that = this;

		return (
			<div>
				<h1>Posts</h1>
				<p>You have <strong>0</strong> posts!</p>
				<p>
					<a href="/post/new">Create a Post</a>
				</p>
			</div>
		)
	}
});

React.render((
	  <div>
	    <App></App>
	  </div>
), document.getElementById('react-root'));

