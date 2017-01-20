var React = require('react');
var router = require('react-router');


var Link = router.Link;
var Card = require('./card')

var Home = function(props){
	return (
		<div className="navigation">
			<input type="checkbox" id="menuToggle" />
			<label htmlFor="menuToggle" className="menu-icon">&#9776;</label>
			<header>
				<h1>This Is The Timer Header</h1>
			</header>
			<nav className="menu">
				<h4>New Card Form</h4>
				<form className="newform">
					<label>New Card Name</label>
					<input className="newcardname" placeholder="description" />
					<label>Description</label>			
					<textarea rows="10" cols="28" className="newcarddescription" placeholder=" new card description" />
					<button className="create-card">Create Card</button>
				</form>
				<Link to="signin"><button className="out">Sign Out</button></Link>
			</nav>
			<div>
				{props.children}
			</div>
		</div>
	)
};

				// {props.children}
module.exports = Home;