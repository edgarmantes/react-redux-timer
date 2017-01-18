require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;

var store = require('./store');
var BoardGame = require('./components/board-game');
var BoardGameContainer = require('./components/board-game-container');
var Game = require('./components/game')

var routes = (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={BoardGame} />
		</Router>
	</Provider>
)

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
		routes, 
    	document.getElementById('app'));
});