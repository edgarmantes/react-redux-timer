
// Upon initiate page load, cards will be retrieved
var GET_CARDS = 'GET_CARDS';
var getCards = function(cardsArray){
	return {
		type: GET_CARDS,
		cards: cardsArray
	}
};

// When submitting a new card on the side bar
var CREATE_NEW_CARD = 'CREATE_NEW_CARD';
var createNewCard = function(cardname, description){
	return {
		type: CREATE_NEW_CARD,
		cardname: cardname,
		description: description

	}
};

// When start/pause button is pressed the time will be saved and stored in store
var SAVE_TIME = 'SAVE_TIME';
var saveTime = function(time, cardIndex){
	return {
		type: SAVE_TIME,
		time: time,
		cardIndex: cardIndex   // Index of the current card list
	}
};

// Delete the card in the array of cards
var DELETE_CARD = 'DELETE_CARD';
var deleteCard = function(key){
	return {
		type: 'DELETE_CARD',
		key: key  // Index of the card being deleted on the array
	}
};



exports.GET_CARDS = GET_CARDS;
exports.getCards = getCards;
exports.CREATE_NEW_CARD = CREATE_NEW_CARD;
exports.createNewCard = createNewCard;
exports.SAVE_TIME = SAVE_TIME;
exports.saveTime = saveTime;
exports.DELETE_CARD = DELETE_CARD;
exports.deleteCard = deleteCard;

