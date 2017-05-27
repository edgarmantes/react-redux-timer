var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');

var Card = require('./card');

var CardsContainer = React.createClass({
	componentDidMount: function(props){
		if (localStorage.TimerProjectArray && document.getElementById('menuToggle').checked) {

			document.getElementById('menuToggle').checked = false;

		} else if (!localStorage.TimerProjectArray) {
			document.getElementById('menuToggle').checked = true;	
		} else {
			return
		}

	},

	render: function(props){
		if (this.props.cards.length !== 0) {
			var cardsArray = this.props.cards.map(function(object, index){

				return <Card key={index} cardname={object.projectName} time={object.currentTime} description={object.description} index={index} />
			})
		} else {
			var cardsArray = <div className="makeNewCard">
								<h1>Create and track your new project</h1>
								<p>Use the form on the side bar to create a new project.</p>
							 </div>
		}

		return (

			<div className="cards-list row cards-row">
				{cardsArray}
			</div>
		)
	}
});


var mapStateToProps = function(state, props){		// maps the state to the props of this component
	return {
		cards : state.cards
	}
};

var Container = connect(mapStateToProps)(CardsContainer);

module.exports = Container;