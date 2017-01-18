var React = require('react');
var connect = require('react-redux').connect;

var Game = require('./game');
var actions = require('../actions/index');

var BoardGameContainer = React.createClass({

	componentDidMount : function(){
		this.props.dispatch(actions.fetchDescription());
	},

	startGame: function(event){
		event.preventDefault();
		this.props.dispatch(actions.randomNum());

	},

	onSubmit: function(event){
		event.preventDefault();
		var input = document.getElementsByClassName('user-num');

		this.props.dispatch(actions.feedback(input[0].value));
		console.log(this)
	},

	onAddChangeInput: function(event){
		event.preventDefault();
		var guessAnswer = this.refs.guessInput.value;
		var guessNumber = Number(guessAnswer);
		this.setState({ guessNum : guessAnswer})
		this.props.dispatch(actions.guessNum(guessNumber));	
	},

	render: function(){

		
		return (
			<div className="boardgame">
				<button className="new-game" onClick={this.startGame}>New Game</button>
				<Game answer="test" />
				<form className="submit-guess">
					<input className="user-num" type="number" ref="guessInput" onChange={this.onAddChangeInput}/>
					<button className="submit-num" type="submit" onClick={this.onSubmit}>Submit Guess</button>
				</form>
			</div>
		)
	},

});

var mapStateToProps = function(state, props){
	return {
		randomNum: state.randomNum,
		guessNum: state.guessNum
	}
};

var Container = connect(mapStateToProps)(BoardGameContainer)


module.exports = Container;