var React = require('react');
var Router = require('react-router');
var UserProfiles = require('./Github/UserProfile');
var Repos = require('./Github/Repos');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase')

var Profile = React.createClass({
	mixins: [Router.State, ReactFireMixin],
	getInitialState: function(){
		return {
			bio: {name: 'Roth'},
			repos: [1,2,3],
			notess: ['noteRoth', 'noteTim']
		}
	},
	componentDidMount: function(){
		this.refs = new Firebase('https://github-note-taker.firebaseio.com');
		var childref = this.refs.child(this.getParams().username);
		this.bindAsArray(childref, 'notess');
	},
	componentWillUnmount: function(){
		this.unbind('notess');
	},
	render: function(){
		var username = this.getParams().username;
		return (
			<div className="row">
				<div className="col-md-4">
					<UserProfiles username={username} bio={this.state.bio} />
				</div>
				<div className="col-md-4">
					<Repos username={username} repos={this.state.repos} />
				</div>
				<div className="col-md-4">
					<Notes username={username} notes={this.state.notess} />
				</div>
			</div>
		)
	}
});

module.exports = Profile;