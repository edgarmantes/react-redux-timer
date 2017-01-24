var React = require('react');
var router = require('react-router');
var connect = require('react-redux').connect;

var Link = router.Link;
var Card = require('./card')
var actions = require('../actions/index');

var Home = React.createClass({
	createCard: function(event){
		event.preventDefault();
		var cardname = document.getElementsByClassName('newcardname')[0].value;
		var carddescription = document.getElementsByClassName('newcarddescription')[0].value;
		this.props.dispatch(actions.createNewCard(cardname, carddescription));

	},	
		
	render: function(props){
		console.log('rerender test')
		return (
			<div className="navigation">
				<input type="checkbox" id="menuToggle" />
				<label htmlFor="menuToggle" className="menu-icon">&#9776;</label>
				<header>

					<div className="timetracker">Time<img  className="clock" src="https://cdn2.iconfinder.com/data/icons/time-and-date-1/48/Clock-128.png" />Tracker</div>
				</header>
				<nav className="menu">
					<h4 className="sidebar-header">New Card Form</h4>
					<form className="newform">
						<label>New Card Name</label><br/>
						<input className="newcardname" placeholder="New Card Name" required></input><br/>
						<label>Description</label><br/>		
						<textarea rows="10" cols="28" className="newcarddescription" placeholder=" new card description" />
						<input type="submit" className="create-card btn" onClick={this.createCard} value="Create New Card" />
					</form>
					<Link to="signin"><button className="out-btn btn">Sign Out</button></Link>
					<Link to="home"><button className="home-btn btn">Home</button></Link>
				</nav>
				<div>
					{this.props.children}
				</div>
			</div>
		)
	}
});

var mapStateToProps = function(state, props){
	return {
		cards: state.cards
	}
};

var Container = connect(mapStateToProps)(Home)


module.exports = Container;