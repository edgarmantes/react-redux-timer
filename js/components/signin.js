var React = require('react');
var connect = require('react-redux').connect;

var Form = require('./form');

var SignIn = React.createClass({
	signIn: function(event){
		event.preventDefault();
		var username = document.getElementsByClassName('myusername')[0].value;
		var password = document.getElementsByClassName('mypassword')[0].value;
	},
	render: function(props){
		return (
			<div className="signin">
				<h1>Sign In</h1>
				<Form name="signin" username="myusername" password="mypassword" onClick={this.signIn} />
			</div>
		)
	}
})

module.exports = SignIn;

// {
// 	username:
// 	password:
// 	cards: []
// }