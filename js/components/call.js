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
	        			<div className="call-carousel-cont">

							<input type="radio" id="1" name="activator" defaultChecked="checked" className="carousel__activator visuallyhidden"/>
							<input type="radio" id="2" name="activator" className="carousel__activator visuallyhidden"/>
							<input type="radio" id="3" name="activator" className="carousel__activator visuallyhidden"/>


							<div className="carousel__controls">
								<label htmlFor="3" className="carousel__control carousel__control--backward">backward3</label>    
								<label htmlFor="2" className="carousel__control carousel__control--forward">forward2</label>
							</div>
							              
							<div className="carousel__controls">
								<label htmlFor="1" className="carousel__control carousel__control--backward">backward1</label>    
								<label htmlFor="3" className="carousel__control carousel__control--forward">forward3</label>
							</div>
							              
							<div className="carousel__controls">
								<label htmlFor="2" className="carousel__control carousel__control--backward">backward2</label>    
								<label htmlFor="1" className="carousel__control carousel__control--forward">forward1</label>
							</div>
							              

							<li className="carousel__slide">
								<h1>1</h1>
							</li>
							<li className="carousel__slide">
								<h1>2</h1>
							</li>
							<li className="carousel__slide">
								<h1>3</h1>
							</li>
							              

							<div className="carousel__indicators">
								<label htmlFor="1" className="carousel__indicator"></label>
								<label htmlFor="2" className="carousel__indicator"></label>
								<label htmlFor="3" className="carousel__indicator"></label>
							</div>
	        			</div>
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