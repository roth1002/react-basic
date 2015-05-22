var React = require('react');
require('../css/client.css');

var NewPost = React.createClass({

	render: function () {
		var that = this;

		return (
			<div>
				<h1>New Post</h1>
				<p>Create a new posts.</p>
				<form action="/post" method="post">
					<p><input type="text" placeholder="Title" name="title" /></p>
				    <p><textarea placeholder="Contents" name="body"></textarea></p>
				    <p><input type="submit" value="Create" /></p>
				</form>
			</div>
		)
	}
});

React.render((
	  <div>
	    <NewPost></NewPost>
	  </div>
), document.getElementById('react-new-post'));

