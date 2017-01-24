var React = require('react');

var router = require('react-router');
var Link = router.Link;

var Card = function(props){
	return (
		<div className="card">
			<div className="innercard col-4">
				<Link to={ '/' + props.index } >  
					<div className="card-descript">
						<div className="info"><strong>Name:   </strong>{props.cardname}</div>
						<div className="info"><strong>Accum. Time:   </strong> {props.time}</div>
						<div className="info"><strong>Description:   </strong> {props.description}</div>
					</div>
				</Link>
			</div>
		</div>
	)
};



module.exports = Card;