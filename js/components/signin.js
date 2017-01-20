var React = require('react');
var connect = require('react-redux').connect;

var Form = require('./form');

var SignIn = function(props){
	return (
		<div className="signin">
			<h1>Sign In</h1>
			<Form name="signin" />
		</div>
	)
};

module.exports = SignIn;