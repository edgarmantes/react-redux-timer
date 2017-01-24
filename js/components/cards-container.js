var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');

var Card = require('./card');

var CardsContainer = React.createClass({


	render: function(props){
		var cardsArray = this.props.cards.map(function(object, index){
			return <Card key={index} cardname={object.cardname} time={object.time} description={object.description} index={index} />
		})
		return (

			<div className="cards-list row">
				{cardsArray}
			</div>
		)
	}
});


var mapStateToProps = function(state, props){
	return {
		cards : state.cards
	}
};

var Container = connect(mapStateToProps)(CardsContainer);

module.exports = Container;