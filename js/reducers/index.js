var actions = require('../actions/index');
var update = require('immutability-helper')

var Card = require('../components/card');

var initialCardState = {
	cards: [],
	timerActive: false
};

var timerReducer = function(state, action){
	state = state || initialCardState;

	if ( action.type === actions.GET_CARDS ) {

		return state
	} else if ( action.type === actions.CREATE_NEW_CARD ){
		var newCard = {
			cardname: action.cardname,
			time: '00:00:00',
			description: action.description
		};		
		
		var cardsArray = state.cards.concat(newCard)
		return Object.assign({}, state, { cards: cardsArray })

	} else if ( action.type === actions.SAVE_TIME ){
		var object = state.cards[action.cardIndex];
		var updateObject = update(object, { time: {$apply: function(){return action.time} }})
		state.cards.splice(action.cardIndex, 1, updateObject)

		return Object.assign({}, state, {cards: state.cards})
	}

	return state;
};

exports.timerReducer = timerReducer;

