var React = require('react');
var connect = require('react-redux').connect;
var router = require('react-router');


var Link = router.Link;

var actions = require('../actions/index')
var Form = require('./form');

var SignIn = React.createClass({
	signIn: function(event){
		event.preventDefault();
		var user = {
			"username" : document.getElementsByClassName('loginInPut')[0].value,
			"password" : document.getElementsByClassName('loginInPut')[1].value		
		}
		
		this.props.dispatch(actions.getUser(user));
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

var Container = connect()(SignIn);

module.exports = Container;
