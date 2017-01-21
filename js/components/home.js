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
		console.log(this.props)
	},	
		
	render: function(props){
		console.log('rerender test')
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
						<input className="newcardname" placeholder="New Card Name" />
						<label>Description</label>			
						<textarea rows="10" cols="28" className="newcarddescription" placeholder=" new card description" />
						<button className="create-card" onClick={this.createCard}>Create Card</button>
					</form>
					<Link to="signin"><button className="out-btn">Sign Out</button></Link>
					<Link to="home"><button className="home-btn">Home</button></Link>
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