var fetch = require('isomorphic-fetch');


var RANDOM_NUM = 'RANDOM_NUM';
var randomNum = function(){
	return {
		type: RANDOM_NUM,

	}
};


var GUESS_NUM = 'GUESS_NUM';
var guessNum = function(num){
	return {
		type: GUESS_NUM,
		num: num
	}	
};


var FEEDBACK = 'FEEDBACK';
var feedback = function(num){
	return {
		type: FEEDBACK,
		number : num
	}
};


var NEW_GAME = 'NEW_GAME';
var newGame = function(reset){
	return {
		type: NEW_GAME,
		reset: reset
	}
};


var FETCH_DESCRIPTION_SUCCESS = 'FETCH_DESCRIPTION_SUCCESS';
var fetchDescriptionSuccess = function(number, description) {
    return {
        type: FETCH_DESCRIPTION_SUCCESS,
        number: number,
        description: description
    };
};

var FETCH_DESCRIPTION_ERROR= 'FETCH_DESCRIPTION_ERROR';
var fetchDescriptionError = function(number, error) {
    return {
        type: FETCH_DESCRIPTION_ERROR,
        number: number,
        error: error
    };
};


var fetchDescription = function(object){
	console.log('fetched the fewest guess')
	return function(dispatch){

		return fetch('http://localhost:8080/fewest-guesses', { method: 'GET' }).then(function(response){

			if (response.status < 200 || response.status >= 300){
				var error = new Error (response.statusText)
				error.response = response
				throw error;
			}
			return response.text();

		}). then(function(response){
			console.log(response)
			document.getElementById('fewestNumber').innerHTML = response;
			return response



		}).then(function(data){
console.log(data)
			var description = data;
			return dispatch(
				fetchDescriptionSuccess(object, description)
			);

		}).catch(function(error){

			return dispatch(
				fetchDescriptionError(object, error)
			)

		});
	};

};


exports.RANDOM_NUM = RANDOM_NUM;
exports.randomNum = randomNum;
exports.GUESS_NUM = GUESS_NUM;
exports.guessNum = guessNum;
exports.FEEDBACK = FEEDBACK;
exports.feedback = feedback;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;

exports.FETCH_DESCRIPTION_SUCCESS = FETCH_DESCRIPTION_SUCCESS;
exports.fetchDescriptionSuccess = fetchDescriptionSuccess;
exports.FETCH_DESCRIPTION_ERROR = FETCH_DESCRIPTION_ERROR;
exports.fetchDescriptionError = fetchDescriptionError;

exports.fetchDescription = fetchDescription;