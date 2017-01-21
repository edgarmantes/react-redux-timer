var React = require('react');
var router = require('react-router');


var Link = router.Link;

var Call = function(props) {
    return (
        <div className="callContainer row">
        	<div className="enter-btns col-12">
            	<Link to="signin" ><button className="signIn">Sign In</button></Link>
            	<Link to="signup" ><button className="signUp">Sign Up</button></Link>
        	</div>
        </div>
    );
};

module.exports = Call;