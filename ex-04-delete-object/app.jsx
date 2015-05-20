var React = require('react');

var people = [
	{
		'name': '帥哥釗',
		'email': 'roth1002@gmail.com',
		'id': 0
	},
	{
		'name': '缺妹TIM',
		'email': 'tim@gmail.com',
		'id': 1
	},
	{
		'name': '一哥Leo',
		'email': 'leo@gmail.com',
		'id': 2
	},
	{
		'name': '人才',
		'email': 'cxxxy@gmail.com',
		'id': 3
	}
];

var Card = React.createClass({

    render: function() {
        return (
        	<div>
        		<h2>{this.props.name}</h2>
        		<h2>{this.props.email}</h2>
        		<div></div>
        		<button onClick={this.props.onClick}>Delete Me</button>
        		<div>------------------</div>
        	</div>
        )
    }
});

var App = React.createClass({

	getInitialState: function () {
		return {
			people: this.props.people.splice(0)
		}
	},

	deletePerson: function (person) {
		this.state.people.splice(this.state.people.indexOf(person), 1);
		this.setState({ people: this.state.people });
	},

	render: function () {
		var that = this;

		return (
			<div>
				{this.state.people.map(function (person) {
					return (
						<Card onClick={that.deletePerson.bind(null, person)} name={person.name} email={person.email}></Card>
					)
				})}

			</div>
		)
	}
});

React.render(<App people={people}></App>, document.body);