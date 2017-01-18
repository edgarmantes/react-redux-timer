var actions = require('../actions/index');

var initialRepositoryState = {
	randomNum : null,
	guessNum : null,
	fewestGuesses : null,
	count : 0
};

var gameReducer = function(state, action){
	state = state || initialRepositoryState;

	if (action.type === actions.RANDOM_NUM){
		var newRandomNum = Math.floor(Math.random() * 100)
		// var prevRandoNum = state.RANDOM_NUM;
		// prevRandoNum--;
		console.log(newRandomNum)
		return Object.assign({}, state, {randomNum: newRandomNum})
		
	} else if (action.type === actions.FEEDBACK){
		state.count++;

		if (state.guessNum === state.randomNum){
			document.getElementById("results").innerHTML = "You Got It!";

			if (state.count < state.fewestGuesses) {
				document.getElementById("results").innerHTML = "New Record!! " + state.count;
				return Object.assign({}, state, { fewestGuesses : state.count })
			}
			return Object.assign({}, state, { guessNum : actions.number })

		} else if (Math.abs(state.guessNum - state.randomNum) < 10){

			document.getElementById("results").innerHTML = "You are soooo close";
			return Object.assign({}, state, { guessNum : actions.number })
			 // "Super HOT!!!"
		} else {
			document.getElementById("results").innerHTML = "Not even close";
			return  Object.assign({}, state, { guessNum : actions.number })
		}

	} else if (action.type === actions.GUESS_NUM){

			return Object.assign({}, state, {guessNum: action.num})

	} else if (action.type === actions.FETCH_DESCRIPTION_SUCCESS) {   // ***
		var number = Number(action.description);
        return Object.assign({}, state, { fewestGuesses : number })
    }
    else if (action.type === actions.FETCH_DESCRIPTION_ERROR) {   // ***
		
		return state
    }
			console.log(state)
	return state;
};

exports.gameReducer = gameReducer;

