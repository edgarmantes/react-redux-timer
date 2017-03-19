require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;


var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

var store = require('./store');
var Call = require('./components/call');
var SignIn = require('./components/signin');
var SignUp = require('./components/signup');
var Home = require('./components/home');
var CardsContainer = require('./components/cards-container');
var CardPage = require('./components/card-page');



var routes = (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Call} />	
			<Route path="signin" component={SignIn} />
			<Route path="signup" component={SignUp} />
			<Route path="home" component={Home} >
				<IndexRoute component={CardsContainer} />
				<Route path=":cardIndex" component={CardPage} />
			</Route>
		</Router>
	</Provider>
)


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
		routes, 
    	document.getElementById('app'));
});
