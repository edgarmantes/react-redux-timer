var fetch = require('isomorphic-fetch');


var GET_CARDS = 'GET_CARDS';
var getCards = function(){
	return {
		type: GET_CARDS
	}
};

var CREATE_NEW_CARD = 'CREATE_NEW_CARD';
var createNewCard = function(cardname, description){
	return {
		type: CREATE_NEW_CARD,
		cardname: cardname,
		description: description

	}
};

var SAVE_TIME = 'SAVE_TIME';
var saveTime = function(time, cardIndex){
	return {
		type: SAVE_TIME,
		time: time,
		cardIndex: cardIndex
	}
};

var DELETE_CARD = 'DELETE_CARD';
var deleteCard = function(key){
	return {
		type: 'DELETE_CARD',
		key: key
	}
};

// var FETCH_DESCRIPTION_SUCCESS = 'FETCH_DESCRIPTION_SUCCESS';
// var fetchDescriptionSuccess = function(object, cards) {
//     return {
//         type: FETCH_DESCRIPTION_SUCCESS,
//         cards : [cards]
//     };
// };

// var FETCH_DESCRIPTION_ERROR= 'FETCH_DESCRIPTION_ERROR';
// var fetchDescriptionError = function(object, error) {
//     return {
//         type: FETCH_DESCRIPTION_ERROR,

//         error: error
//     };
// };

// var fetchCards = function(object){
// 		console.log('test fetchfunction')	
// 	return function(dispatch){

// 		return fetch('http://localhost:8080/home', { method: 'GET'}).then(function(response){

// 			if (response.status < 200 || response.status >= 300){
// 				var error = new Error (response.statusText)
// 				error.response = response
// 				throw error;
// 			}
// 			console.log(response)
// 			return response.text();

// 		}).then(function(response){

// 			return response

// 		}).then(function(data){

// 			var cards = data;
// 			return dispatch(
// 				fetchDescriptionSuccess(object, cards)
// 			);

// 		}).catch(function(error){

// 			return dispatch(
// 				fetchDescriptionError(object, error)
// 			)

// 		});
// 	};
// };


// var fetchDescription = function(object){
// 	return function(dispatch){

// 		return fetch('http://localhost:8080/fewest-guesses', { method: 'GET' }).then(function(response){

// 			if (response.status < 200 || response.status >= 300){
// 				var error = new Error (response.statusText)
// 				error.response = response
// 				throw error;
// 			}
// 			return response.text();

// 		}). then(function(response){
// 			console.log(response)
// 			document.getElementById('fewestNumber').innerHTML = response;
// 			return response



// 		}).then(function(data){

// 			var description = data;
// 			return dispatch(
// 				fetchDescriptionSuccess(object, description)
// 			);

// 		}).catch(function(error){

// 			return dispatch(
// 				fetchDescriptionError(object, error)
// 			)

// 		});
// 	};

// };


exports.GET_CARDS = GET_CARDS;
exports.getCards = getCards;
exports.CREATE_NEW_CARD = CREATE_NEW_CARD;
exports.createNewCard = createNewCard;
exports.SAVE_TIME = SAVE_TIME;
exports.saveTime = saveTime;
exports.DELETE_CARD = DELETE_CARD;
exports.deleteCard = deleteCard;

// exports.FETCH_DESCRIPTION_SUCCESS = FETCH_DESCRIPTION_SUCCESS;
// exports.fetchDescriptionSuccess = fetchDescriptionSuccess;
// exports.FETCH_DESCRIPTION_ERROR = FETCH_DESCRIPTION_ERROR;
// exports.fetchDescriptionError = fetchDescriptionError;

// exports.fetchCards = fetchCards;