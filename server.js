var express = require('express');

var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');
var cookieParser = require('cookie-parser');
var session = require('express-session')
var MongoStore = require('connect-mongo')(session);

// Schema models
var User = require('./models/user');
var CreateProject = require('./models/create-project')
var config = require('./config');
var app = express();

mongoose.Promise = global.Promise;  // Use this code because mongoose.Promise has been deprecated and global.Promise is taking its place.

app.use(express.static('public'));
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// middleware to run as a module or as a server. 
// This setup the connection to the server and the server to the DB.
var runServer = function(callback) {
    mongoose.connect(config.DATABASE_URL, function(err) {
        if (err && callback) {
            return callback(err);
        }

        app.listen(config.PORT, function() {
            console.log('Listening on localhost:' + config.PORT);
            if (callback) {
                callback();
            }
        });
    });
};

// If this file was 'required' on another file as a module then this file will run
if (require.main === module) {
    runServer(function(err) {
        if (err) {
            console.error(err);
        }
    });
};

exports.app = app;
exports.runServer = runServer;

// app.get('/', function(request, response) {

//     console.log('serverTest')
// 	response.header ('Access-Control-Allow-Origin',	'*');
//  	response.header ('Access-Control-Allow-Credentials', true);
// 	response.header ('Access-Control-Allow-Methods', 'OPTIONS');
// 	response.header ('Access-Control-Allow-Headers', 'Content-Type');
//     response.send(state)
// });

// app.get('/fewest-guesses', function(request, response) {
    
// 	console.log('server test')
// 	response.header ('Access-Control-Allow-Origin',	'*');
//  	response.header ('Access-Control-Allow-Credentials', true);
// 	response.header ('Access-Control-Allow-Methods', 'OPTIONS');
// 	response.header ('Access-Control-Allow-Headers', 'Content-Type');
//     response.send(JSON.stringify(state));
// });

// app.post('/', function(request, response) {
//     response.send("Hello POST");
// });

// app.listen(process.env.PORT || 8080, process.env.IP);