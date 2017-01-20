var React = require('react');

var Card = function(props){
	return (
		<div className="card">
			<div className="card-descript">
				<div><strong>Name:</strong>{props.cardname}</div>
				<div><strong>Accum. Time:</strong> {props.time}</div>
				<div><strong>Description:</strong> {props.description}</div>
			</div>
		</div>
	)
};

module.exports = Card;