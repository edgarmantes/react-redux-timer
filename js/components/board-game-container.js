var React = require('react');

var Provider = require('react-redux').Provider;

var store = require('../store');
var BoardGame = require('./board-game');


var BoardGameContainer = function(){
	return (
		<Provider store={store}>
			<BoardGame />
		</Provider>
	)	
};