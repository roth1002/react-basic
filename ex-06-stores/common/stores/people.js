var people = {
	'roth': {
		'name': '帥哥釗',
		'email': 'roth1002@gmail.com',
		'id': 0
	},
	'tim': {
		'name': '缺妹TIM',
		'email': 'tim@gmail.com',
		'id': 1
	},
	'leo': {
		'name': '一哥Leo',
		'email': 'leo@gmail.com',
		'id': 2
	},
	'cy': {
		'name': '人才',
		'email': 'cxxxy@gmail.com',
		'id': 3
	}
};

var allPeopleIds = [
	'roth', 'tim', 'leo', 'cy'
];

module.exports = {
	all: function () {
		return allPeopleIds.map(function (id) {
			return people[id];
		})
	},

	get: function () {
		return people[id];
	}

};