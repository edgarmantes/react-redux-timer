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
		var carddescription = document.getElementById('newcarddescription').value;
		this.props.dispatch(actions.createNewCard(cardname, carddescription));
		// document.getElementsByClassName('newcardname')[0].empty();
		// document.getElementById('newcarddescription').value='';
		document.formcreate.reset();
		document.getElementById('menuToggle').checked = false;
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
					<form name="formcreate" className="newform">
						<label>New Card Name</label><br/>
						<input className="newcardname" placeholder="New Card Name" type="text" required={true}></input><br/>
						<label>Description</label><br/>		
						<textarea rows="10" cols="28" id="newcarddescription" placeholder=" new card description" type="text" required={true}/>
						<input type="submit" className="create-card btn" onClick={this.createCard} value="Create New Card" />
					</form>
				
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