var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');

var CardsContainer = React.createClass({
	componentDidMount : function(){
		this.props.dispatch(actions.fetchCards());

	},

	render: function(props){
		var cards = this.props.cards
		console.log(cards)

		return (
			<div className="cards-list">
				
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