var React = require('react');
var connect = require('react-redux').connect;

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

	render: function(props){
		console.log(this.state.cards)
		if (this.props.cards) {
			this.state.cards = this.props.cards;
		}
		console.log(this.state.cards.cards)
		var card = this.state.cards[this.props.params.cardIndex];
		
		var name = card.cardname;
		var time = card.time;
		var description = card.description;

		return (
			<div className="pageContainer row">
				<div className="page col-12">
					<div><strong>Card Name:</strong>{name}</div>
					<strong>Accummulated Time:</strong><div id="time">{time}</div>
					<div><strong>Description:</strong>{description}</div>
					<button id="control" onClick={this.changeState}>Start</button>
				</div>
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