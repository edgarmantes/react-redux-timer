var React = require('react');
var connect = require('react-redux').connect;
var router = require('react-router');


var Link = router.Link;


var Form = require('./form');

var SignUp = React.createClass({
	signUp: function(event){
		event.preventDefault();
		var username = document.getElementsByClassName('myusername')[0].value;
		var password = document.getElementsByClassName('mypassword')[0].value;
	},
	render: function(props){
		return (
			<div className="signup-container row">
				<div className="signup-cont col-6">
					<img className="signup-img" src="../images/watch.png" />
					<Form name="signup" username="myusername" password="mypassword" onClick={this.signUp} doThis="Sign Up" />
					<div className="signup-toSignIn">
						<Link to="signin"><p>Already have an account? Sign In</p></Link>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = SignUp;