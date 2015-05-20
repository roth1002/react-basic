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
        		<div>{this.props.email}</div>
        		<div>------------------</div>
        	</div>
        )
    }
});

var App = React.createClass({

	getInitialState: function(){
		return {
			people: people
		}
	},

	render: function () {
		return (
			<div>
				{this.state.people.map(function (person) {
					return (
						<Card name={person.name} email={person.email}></Card>
					)
				})}

			</div>
		)
	}
});

React.render(<App></App>, document.body);