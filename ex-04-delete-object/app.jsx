var React = require('react');
var deletePerson;
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
			people: this.props.people.splice(0) //copy of this.props.people
		}
	},

	deletePerson: function (person) {
    console.log(this)
		this.state.people.splice(this.state.people.indexOf(person), 1);
		this.setState({ people: this.state.people });
	},

	render: function () {

		return (
			<div>
				{this.state.people.map(function (person) {
          deletePerson = this.deletePerson
          var wtf = this.deletePerson.bind(null, person)
					return (
						<Card onClick={wtf} name={person.name} email={person.email}></Card>
					)
				}, this)}

			</div>
		)
	}
});

React.render(<App people={people}></App>, document.body);

var a = deletePerson.bind(null, people[0]);
var b = deletePerson.bind('tim', people[1]);
a();b()
console.log(1111);

