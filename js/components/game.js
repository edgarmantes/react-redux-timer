var React = require('react');
var connect = require('react-redux').connect;


var Game = function(props){
	return (
		<div className="game">
			<h2 className="fewestguesses">Record</h2>
				<div id="fewestNumber"></div>
			<h2 className="yourNum">Tally</h2>
				<div id="yourcount">{props.tally}</div>
			<div id='results'>{props.answer}</div>
		</div>
	)
};

var Container = connect()(Game);


module.exports = Container;