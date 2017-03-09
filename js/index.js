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



window.fbAsyncInit = function() {
	FB.init({
	  appId      : '1826475624277194',
	  xfbml      : true,
	  version    : 'v2.8'
	});
	FB.AppEvents.logPageView();

	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
			console.log('you are connected to facebook')
		} else if (response.status === 'not_authorized') {
			console.log('you are not authorized')
		} else {
			console.log('you are not logged in')
		}
	});
};

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function login() {
	FB.login(function(response) {
		if (response.status === 'connected') {
			alert('you are connected :)')
    	} else if (response.status === 'not_authorized') {
    		alert('you need to try to log in again')
    	} else {
    		alert('Try again!')
    	}
	}, {scope: 'publish_actions'});
};

function post() {
	var message = {
		message: 
			"Project: " + document.getElementById('cardName').innerHTML +
			"Time: " + document.getElementById('time').innerHTML +
			"Description: " + document.getElementById('descript').innerHTML
	};

	FB.api('/me/feed', 'post', message, function(response) {

	});
}





var routes = (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Home}>			
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
