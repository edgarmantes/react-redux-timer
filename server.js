var express = require('express');

var app = express();

var state = [

	{
		name: "Card One",
		hour: 02,
		minutes: 02,
		seconds: 02,
		descriptions: "sla akjhdsfkjh akh kah jdhfksh fkhehwsjdnfkaj ajsdfksjhfkj" 
	},
	{
		name: "Card Two",
		hour: 02,
		minutes: 02, 
		seconds: 02,
		descriptions: "aljflaskj aksjdf it htihs af is flaj sojs iodjf lskjdf"
	},
	{
		name: "Card Three",
		hour: 03,
		minutes: 03,
		seconds: 03,
		descriptions: "lajflajsldjlksj e dakjlajlkjf slkj l s lkjsdlkjf lkjsl dfkljsdj wlje"
	},
	{
		name: "Card Four",
		hour: 04,
		minutes: 04,
		seconds: 04,
		descriptions: "al aljljdlfjlk sskj lafl ase tghius s is oifghg ot eb abe i i"
	},


]

app.get('/home', function(request, response) {

    console.log('serverTest')
	response.header ('Access-Control-Allow-Origin',	'*');
 	response.header ('Access-Control-Allow-Credentials', true);
	response.header ('Access-Control-Allow-Methods', 'OPTIONS');
	response.header ('Access-Control-Allow-Headers', 'Content-Type');
    response.send(state)
});

app.get('/fewest-guesses', function(request, response) {
    
	console.log('server test')
	response.header ('Access-Control-Allow-Origin',	'*');
 	response.header ('Access-Control-Allow-Credentials', true);
	response.header ('Access-Control-Allow-Methods', 'OPTIONS');
	response.header ('Access-Control-Allow-Headers', 'Content-Type');
    response.send(JSON.stringify(state));
});

app.post('/', function(request, response) {
    response.send("Hello POST");
});

app.listen(process.env.PORT || 8080, process.env.IP);