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
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
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


app.use(bodyParser.json());

// Beginning routes

app.options('*', function(req, res){
    res.status(200)
});

// SignUp
app.post('/signup', function(req, res){
    console.log(71, "Signup test", req.body)

    if (!req.body) {
        return res.status(400).json({
            message: "No request body"
        });
    }

    if (!('username' in req.body)) {
        return res.status(422).json({
            message: 'Missing field: username'
        });
    }

    var username = req.body.username;

    if (typeof username !== 'string') {
        return res.status(422).json({
            message: 'Incorrect field type: username'
        });
    }

    username = username.trim();

    if (username === '') {
        return res.status(422).json({
            message: 'Incorrect field length: username'
        });
    }

    if (!('password' in req.body)) {
        return res.status(422).json({
            message: 'Missing field: password'
        });
    }

    var password = req.body.password;

    if (typeof password !== 'string') {
        return res.status(422).json({
            message: 'Incorrect field type: password'
        });
    }

    password = password.trim();

    if (password === '') {
        return res.status(422).json({
            message: 'Incorrect field length: password'
        });
    }


    bcrypt.genSalt(10, function(err, salt) {
        console.log(134, 'test salt', salt)
        if (err) {
            return res.status(500).json({
                message: 'Internal server error'
            });
        }

        bcrypt.hash(password, salt, function(err, hash) {
            if (err) {
                return res.status(500).json({
                    message: 'Internal server error'
                });
            }

            var user = new User({
                username: username,
                password: hash
            });
            console.log(151, "peppered pasword and username", user)
            user.save(function(err, object) {

                if (err) {
                    return res.status(500).json({
                        message: 'Internal server error'
                    });
                }

                return res.status(201).json(object); // new user has been created successfully
            });
        });
    });

    
})



// SignIn
app.post('/signin', function(req, res){
    console.log(164, 'signin test', req.body)
        User.findOne({ username: req.body.username }, function (err, user) { // First this searches for an existing username that was provided
            
            if (err) {  // if there was an issue besides 'nonexisting user' the error message will be passed in here. 
                return res.status(500).json({ message: 'Internal Server Error. Did not validate Username.' }) 
            }
            if (!user) {        // If no username found this err will be thrown
                return res.status(401).json({ message: 'Incorrect username.' });
            }

            user.validatePassword(req.body.password, function(err, isValid){  // If username is found in the db this will authenticate the submitted password with the db password on file. The validatePassword() method is a method from the User model. 
                if (err) { // if there was an issue besides 'invalid password' the error message will be passed in here. 
                    return res.status(500).json({ message: 'Internal Server Error. Did not validate.' }) 
                } 

                if (!isValid) {         // If password submitted is incvalid this err will be thrown
                    return res.status(401).json({ message: 'Incorrect password.' });
                }

                console.log(187, 'login authenticated')
                return res.status(200).json(user)
            });
        }); 
});

// When creating new projects the DB will be updating the CreateProjects document and Users profile projects field
app.post('/createproject', function(req, res){
    console.log(191, "/createproject test", req.body);

    var newProject = {
        projectName : req.body.cardName,
        description : req.body.description,
        currentTime: '00:00:00',
        userId: req.body.userId
    }


    CreateProject.create(newProject, function(err, object){
        console.log(201, err, object, "newProject", newProject)
        if (err){
            return res.status(500).json({
                message: 'did not create the project. Internal Server Error'
            });
        }


        User.findOneAndUpdate(
            {_id: object.userId},
            {$push:{'projects': object._id}}, // pushes newly created objects object._id into users project list
            function(err, user){
                console.log(214, err, user)
                if (err) {
                    return res.status(502).json({
                        message: 'Internal Server Error'
                    })
                }

            }
        )
        res.status(200).json(object)

    })

});

app.post('/time', function(req, res){
    console.log(230, "server savetimedb", req.body)
    CreateProject.findOneAndUpdate(
        {_id: req.body.projectId},
        {$set:{'currentTime': req.body.time}}, // Updates the time in DB
        function(err, project){
            console.log(214, err, project)
            if (err) {
                return res.status(502).json({
                    message: 'Internal Server Error'
                })
            }
        }
    )
    res.status(200).json(req.body)
})


app.post('/project', function(req, res){
    console.log(248, "server_project delete", req.body)

    User.findOneAndUpdate(
        {_id: req.body.userId},
        {$pull:{'projects': req.body.projectId}},
        function(err, user){
            console.log(254, err, user)
            if (err) {
                return res.status(502).json({
                    message: 'Internal Server Error'
                })
            }            
        }

    )

    res.status(200).json(req.body)
})