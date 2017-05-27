var React = require('react');

var router = require('react-router');
var connect = require('react-redux').connect;

var Link = router.Link;

var actions = require('../actions/index');

var CardPage = React.createClass({
	getInitialState: function(){
		return {
			timerActive: false,   // When true the timer will begin counting until change of state to false
			cards: null			  // Initially null until it retrieves/creates cards
		}
	},

	componentDidMount: function(props){
		if (document.getElementById('menuToggle').checked) {

			document.getElementById('menuToggle').checked = false;

		} else {
			return
		}
	},

	startTimer: function(){  	// Timer logic

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

		var control = document.getElementById('control');

		if ( this.state.timerActive == false ) { 			// If false it will change the timerActive state to true and then initiate the startTimer function
			this.state.timerActive = true;
			this.startTimer();
			control.style.backgroundImage = 'url(../images/pause.png)'		// Changes the button value based on the state of the timer
		} else {							
			this.state.timerActive = false;								// Stops the timer
			var time = document.getElementById('time').innerHTML;
			var cardIndex = this.props.params.cardIndex;

			var TimerProjectArray = localStorage.getItem('TimerProjectArray');	// reference index of localstorage array to get projectId for update
			var parsedArray = JSON.parse(TimerProjectArray);					// " "
			var projectId = parsedArray[cardIndex]._id;					// " "


			this.props.dispatch(actions.saveTime(time, cardIndex));		// Dispatches the saveTime function
			control.style.backgroundImage = 'url(../images/play.png)'	// Changes the button image back to play symbol


			this.props.dispatch(actions.saveTimeDB(time, projectId))	// Ajax call to update the time in the db
		}
	},

	deleteCard: function(event){
		event.stopPropagation();
	// deletes the card on current card-page

		var TimerProjectArray = localStorage.getItem('TimerProjectArray');	// reference index of localstorage array to get projectId for update
		var parsedArray = JSON.parse(TimerProjectArray);					// " "
		var projectId = parsedArray[this.props.params.cardIndex].projectId;	
		var userId = localStorage.userId		


		this.props.dispatch(actions.deleteProjectDB(projectId, userId))

		this.props.dispatch(actions.deleteCard(this.props.params.cardIndex))	// Deletes the project in redux store and localStorage
	},

	render: function(props){
		if (this.props.cards) {						// if this.props.cards is true the this.state cards array will be set
			this.state.cards = this.props.cards;
		}

		var card = this.state.cards[this.props.params.cardIndex]; 			// The index of the current card on the page is passed in to reference the properties of that object
		
		var name = card.projectName;
		var time = card.currentTime;
		var description = card.description;

		return (
			<div className="pageContainer row">
				<div className={"page col-12 " + this.props.params.cardIndex} >
					<div id="cardName"><strong className="cPage"></strong>{name}</div>
					<div className="time-form">
						<div id="time">
							{time}		
						</div>
						<button id="control" onClick={this.changeState}></button>
						<Link to="/home"><button className="delete-btn" onClick={this.deleteCard} ></button></Link>
					</div>
					<div id="descript"><strong className="cPage"></strong>{description}</div>
					
				</div>
				<div className="social-btn col-12">
					<button className="facebook-btn but-card"></button>
					<button className="twitter-btn but-card"></button>
					<button className="googleplus-btn but-card"></button>
				</div>
			</div>
		)
	}
});

// <a href="https://www.faceboook.com/sharer/sharer.php?u=URLENCODED_URL&t=TITLE" onClick={"javascript:window.open(this.href\", \'menubar=no,toolbar=no, resizable=yes,scrollbars=yes,height=300,width=600\');return false;" target="_blank" title="Share On Twitter"}></a>

var mapStateToProps = function(state, props){
	return {
		cards: state.cards,
		timerActive: state.timerActive
	}
};

var Container = connect(mapStateToProps)(CardPage)


module.exports = Container;