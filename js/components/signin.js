var React = require('react');
var connect = require('react-redux').connect;
var router = require('react-router');


var Link = router.Link;


var Form = require('./form');

var SignIn = React.createClass({
	signIn: function(event){
		event.preventDefault();
		var username = document.getElementsByClassName('myusername')[0].value;
		var password = document.getElementsByClassName('mypassword')[0].value;
	},
	render: function(props){
		return (
			<div className="signin-container row">
				<div className="signin-cont col-6">
					<img className="signin-img " src="../images/watch.png" />
					<Form name="signin" username="myusername" password="mypassword" onClick={this.signIn} doThis="Log In" />
					<div className="signin-toSignUp">
						<Link to="signup"><p>Need to sign up? Sign Up</p></Link>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = SignIn;
