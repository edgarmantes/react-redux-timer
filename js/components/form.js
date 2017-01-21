var React = require('react');


var Form = function(props){
	return (
		<form className={props.name} >
			<input name={props.username} placeholder="User Name" required />
			<input name={props.password} placeholder="Password" required />
			<button className="submit-btn" type="submit" onClick={props.onClick}>Enter</button>
		</form>
	)	
};

module.exports = Form;