var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {

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