var qwest = require("qwest")
var fetch = require('isomorphic-fetch');

var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;


// Upon initiate page load, cards will be retrieved
var GET_CARDS = 'GET_CARDS';
var getCards = function(cardsArray){
	return {
		type: GET_CARDS,
		cards: cardsArray
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

// Create New Card Ajax call
var CREATE_NEW_CARD_SUCCESS = 'CREATE_NEW_CARD_SUCCESS';
var createNewCardSuccess = function (data){
	return {
		type: 'CREATE_NEW_CARD_SUCCESS',
		cardname: data.projectName,
		description: data.description		
	}
}

// Signing in Ajax call
var GET_USER = 'GET_USER';
var getUser = function(user){

	return function(dispatch){
		return fetch('/signin', 
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json, application/xml, text/plain, text/html, *.*'					
				},

				body: JSON.stringify(user)
			}).then(function(response){

				if (response.status < 200 || response.status >= 300){
					var error = new Error (response.statusText)
					error.response = response
					throw error;
				}
			
				return response.text();
			}).then(function(data){
				var dataParsed = JSON.parse(data)

				localStorage.setItem('userId', dataParsed._id)
				localStorage.setItem('TimerProjectArray', dataParsed.projects)

				return dataParsed

			}).then(function(data){

				hashHistory.push('home')

				var localArray = localStorage.getItem('TimerProjectArray');

				return dispatch(
					getCards(localArray)
				)
			})
	}
};

// Signing Up Ajax call
var GET_MEMBER = 'GET_MEMBER';
var getMember = function(user){

	return function(dispatch){
		return fetch('/signup', 
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
				},
				body: JSON.stringify(user)
			}).then(function(response){
				
				if (response.status < 200 || response.status >= 300){
					var error = new Error (response.statusText)
					error.response = response
					throw error;
				}
			
				return response.text();
			}).then(function(data){
				var dataParsed = JSON.parse(data)

				localStorage.setItem('userId', dataParsed._id)
				localStorage.setItem('TimerProjectArray', dataParsed.projects)

				return dataParsed
			}).then(function(data){

				hashHistory.push('home')

				var localArray = localStorage.getItem('TimerProjectArray');

				return dispatch(
					getCards(localArray)
				)
			})
	}
}

// When submitting a new card on the side bar
var CREATE_NEW_CARD = 'CREATE_NEW_CARD';
var createNewCard = function(cardname, description){

	var projectDescription = {
		cardName : cardname,
		description : description,
		time: '00:00:00',
		userId: localStorage.userId
	}

	return function(dispatch){
		return fetch('/createproject', 
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
				},
				body: JSON.stringify(projectDescription)
			}).then(function(response){
				
				if (response.status < 200 || response.status >= 300){
					var error = new Error (response.statusText)
					error.response = response
					throw error;
				}
			
				return response.text();
			}).then(function(data){
				var dataParsed = JSON.parse(data)
				console.log(154, "create new project test", dataParsed)

				return dataParsed
			}).then(function(data){

				return dispatch(
					createNewCardSuccess(data)
				)
				
			})
	}



	// return {
	// 	type: CREATE_NEW_CARD,
	// 	cardname: cardname,
	// 	description: description

	// }
};



exports.GET_CARDS = GET_CARDS;
exports.getCards = getCards;
exports.CREATE_NEW_CARD = CREATE_NEW_CARD;
exports.createNewCard = createNewCard;
exports.SAVE_TIME = SAVE_TIME;
exports.saveTime = saveTime;
exports.DELETE_CARD = DELETE_CARD;
exports.deleteCard = deleteCard;

exports.GET_USER = GET_USER;
exports.getUser = getUser;

exports.GET_MEMBER = GET_MEMBER;
exports.getMember = getMember;

exports.CREATE_NEW_CARD_SUCCESS = CREATE_NEW_CARD_SUCCESS;
exports.createNewCardSuccess = createNewCardSuccess;
