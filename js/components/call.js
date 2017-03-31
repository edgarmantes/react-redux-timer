var React = require('react');
var router = require('react-router');


var Link = router.Link;

var Call = React.createClass({


	render: function(props) {

	    return (
	        <div className="callContainer row">
	        	<div className="call-first  call-div">
	        		<div className="call-fixbackground-carosoul">
	        			<img className="call-timer-img hidden" src="../images/watch.png" />
	        			<div className="call-carousel-cont">

							<input type="radio" id="1" name="activator" defaultChecked="checked" className="carousel__activator visuallyhidden"/>
							<input type="radio" id="2" name="activator" className="carousel__activator visuallyhidden"/>
							<input type="radio" id="3" name="activator" className="carousel__activator visuallyhidden"/>


							<div className="carousel__controls">
								<label htmlFor="3" className="carousel__control carousel__control--backward"><div className="control-backward"></div></label>    
								<label htmlFor="2" className="carousel__control carousel__control--forward"><div className="control-forward"></div></label>
							</div>
							              
							<div className="carousel__controls">
								<label htmlFor="1" className="carousel__control carousel__control--backward"><div className="control-backward"></div></label>    
								<label htmlFor="3" className="carousel__control carousel__control--forward"><div className="control-forward"></div></label>
							</div>
							              
							<div className="carousel__controls">
								<label htmlFor="2" className="carousel__control carousel__control--backward"><div className="control-backward"></div></label>   
								<label htmlFor="1" className="carousel__control carousel__control--forward"><div className="control-forward"></div></label>
							</div>
							              

							<li className="carousel__slide">
								<div className="">
									<img className="" src="" atl=""/>
									<h2 className=""></h2>
									<p className=""></p>
								</div>
							</li>
							<li className="carousel__slide">
								<div className="project-management-slide">
									<img className="slide-proj-cycle" src="../images/proj-cycle.png" atl="project-management-cycle"/>
									<h2 className="slide-cycle-desc">Log Your Work Time</h2>
									<p className="slide-cycle-desc">Time your projects life-cycle from start to finish</p>
								</div>
							</li>
							<li className="carousel__slide">
								<div className="">
									<img className="" src="" atl=""/>
									<h2 className=""></h2>
									<p className=""></p>
								</div>
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
		        		<li className="call-ftr-list call-edgar-icon"><a href="edgarmantes.tech" target="_blank"><img className="edgar-icon1" src="../images/edgarEM1.png"/></a></li>
		        		<li className="call-ftr-list call-ftr-facebook"><a href="" target="_blank"><img className="" src=""/>facebook |</a></li>
		        		<li className="call-ftr-list call-ftr-github"><a href="https://github.com/shootermantes" target="_blank"><img className="" src=""/>github |</a></li>
		        		<li className="call-ftr-list call-ftr-email"><a href="matilto:edgar.mantes11@gmail.com" target="_blank"><img className="" src=""/>email: edgar.mantes11@gmail.com |</a></li>
		        		<li className="call-ftr-list call-ftr-cell"><a href="tel:312-937-1641" target="_blank"><img className="" src=""/>cell: 312-937-1641 |</a></li>
		        	</ul>
		        </div>
	        </div>
	    )
	}

});

module.exports = Call;