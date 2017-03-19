var React = require('react');
var router = require('react-router');


var Link = router.Link;

var Call = React.createClass({


	render: function(props) {

	    return (
	        <div className="callContainer row">
	        	<div className="call-first  call-div">
	        		<div className="call-fixbackground-carosoul">
	        		<img className="call-timer-img hidden" src="../images/timer.png" />
	        		</div>
		        	<div className="enter-btns call-btns col-6">
		            	<Link to="signin" ><button className="signIn">Sign In</button></Link>
		            	<Link to="signup" ><button className="signUp">Sign Up</button></Link>
		        	</div>
	        	
		        	<ul className="call-footer-cont">
		        		<li className="call-ftr-list call-edgar-icon"><a href="" target="_blank"><img className="" src=""/>Icon |</a></li>
		        		<li className="call-ftr-list call-ftr-facebook"><a href="" target="_blank"><img className="" src=""/>facebook |</a></li>
		        		<li className="call-ftr-list call-ftr-github"><a href="" target="_blank"><img className="" src=""/>github |</a></li>
		        		<li className="call-ftr-list call-ftr-email"><a href="" target="_blank"><img className="" src=""/>email: edgar.mantes11@gmail.com |</a></li>
		        		<li className="call-ftr-list call-ftr-cell"><a href="" target="_blank"><img className="" src=""/>cell: 312-937-1641 |</a></li>
		        	</ul>
		        </div>
	        </div>
	    )
	}

});

module.exports = Call;