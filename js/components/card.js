var React = require('react');

var router = require('react-router');
var Link = router.Link;

var Card = function(props){			// Card templete for listing out all cards in the array
	return (
		<div className="card">
			<div className="innercard col-4">
				<Link to={ '/home/' + props.index } >  
					<div className="card-descript">
						<div className="info info-name"><strong>{props.cardname}</strong></div>
						<div className="info info-time">{props.time}</div>
						<div className="info info-desc">{props.description}</div>
					</div>
				</Link>
			</div>
		</div>
	)
};



module.exports = Card;