var React = require('react');
var connect = require('react-redux').connect;
var router = require('react-router');


var Link = router.Link;
var actions = require('../actions/index')

var Form = require('./form');

var SignUp = React.createClass({
	signUp: function(event){
		event.preventDefault();
		var user = {
			username : document.getElementsByClassName('loginInPut')[0].value,
			password : document.getElementsByClassName('loginInPut')[1].value		
		}

		this.props.dispatch(actions.getMember(user))

	},
	render: function(props){
		return (
			<div className="signup-container row">
				<div className="signup-cont col-6">
					<img className="signup-img" src="../images/watch.png" />
					<Form name="signup" username="myusername" password="mypassword" onClick={this.signUp} doThis="Sign Up" />
					<div className="signup-toSignIn">
						<Link to="signin"><p className="sign-switch">Already have an account? Sign In</p></Link>
					</div>
				</div>
			</div>
		)
	}
})

var Container = connect()(SignUp);

module.exports = Container;