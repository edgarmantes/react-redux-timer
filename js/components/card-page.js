var React = require('react');

var router = require('react-router');
var connect = require('react-redux').connect;


var Link = router.Link;

var actions = require('../actions/index');

var CardPage = React.createClass({
	getInitialState: function(){
		return {
			timerActive: false,
			cards: null
		}
	},

	startTimer: function(){

		if (this.state.timerActive) {
			var timer = document.getElementById('time').innerHTML;
			var arr = timer.split(':');
			var hour = arr[0];
			var min = arr[1];
			var sec = arr[2];

			if ( sec == 59 ) {
				if ( min == 59 ) {
					hour++;
					min = 0;
					if ( hour <10 ) hour = "0" + hour;
				} else {
					min++;
				}
				if ( min < 10 ) min = "0" + min;
				sec = 0;
			} else {
				sec++;
				if ( sec < 10 ) sec = "0" + sec;
			}

			document.getElementById('time').innerHTML = hour + ':' + min + ':' + sec;
			setTimeout(this.startTimer, 1000)
		}
	},

	changeState: function(event){
		event.preventDefault();
		if ( this.state.timerActive == false ) {
			this.state.timerActive = true;
			this.startTimer();
			console.log('timer has started');
			document.getElementById('control').innerHTML = 'Pause';
		} else {
			this.state.timerActive = false;
			console.log('timer has paused');
			var time = document.getElementById('time').innerHTML;
			var cardIndex = this.props.params.cardIndex;
			this.props.dispatch(actions.saveTime(time, cardIndex));
			document.getElementById('control').innerHTML = 'Start'
		}
	},

	deleteCard: function(event){
		event.stopPropagation();

		this.props.dispatch(actions.deleteCard(this.props.params.cardIndex))

	},

	render: function(props){
		if (this.props.cards) {
			this.state.cards = this.props.cards;
		}

		var card = this.state.cards[this.props.params.cardIndex];
		
		var name = card.cardname;
		var time = card.time;
		var description = card.description;

		return (
			<div className="pageContainer row">
				<div className={"page col-12 " + this.props.params.cardIndex} >
					<div id="cardName"><strong className="cPage">Card Name: </strong>{name}</div>
					<strong className="cPage">Accummulated Time: </strong><div id="time">{time}</div>
					<div id="descript"><strong className="cPage">Description:</strong>{description}</div>
					<button id="control" onClick={this.changeState}>Start</button>
				</div>
				<button className="facebook-btn but-card"><img className="fb" src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-128.png" />Share</button><br/>				
				<Link to="/"><button className="delete-btn but-card" onClick={this.deleteCard} >Delete</button></Link>
				
			</div>
		)
	}
});



var mapStateToProps = function(state, props){
	return {
		cards: state.cards,
		timerActive: state.timerActive
	}
};

var Container = connect(mapStateToProps)(CardPage)


module.exports = Container;