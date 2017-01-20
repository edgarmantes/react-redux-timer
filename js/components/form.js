var React = require('react');


var Form = function(props){
	return (
		<form className={props.name} >
			<input className="username" placeholder="User Name" required />
			<input className="password" placeholder="Password" required />
			<button className="submit-btn" type="submit">Enter</button>
		</form>
	)	
};

module.exports = Form;