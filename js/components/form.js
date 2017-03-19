var React = require('react');


var Form = function(props){
	return (
		<form className={props.name} >
			<div className="input-container">
				<div className="email-cont"><img className="input-img input-email-img" src="../images/email.png" /><input className={props.name + "-input loginInPut"} name={props.username} placeholder="User Name" required /></div>
				<div className="password-cont"><img className="input-img input-password-img" src="../images/lock.png" /><input className={props.name + "-input loginInPut"} name={props.password} placeholder="Password" required /></div>
			</div>
			<button className="submit-btn" type="submit" onClick={props.onClick}>{props.doThis}</button>
		</form>
	)	
};

module.exports = Form;