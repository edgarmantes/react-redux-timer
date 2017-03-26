var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CreateProjectSchema = new mongoose.Schema({
    projectName: { type: String },
    currentTime: { type: String },
    description: { type: String},
    
});

var CreateProject = mongoose.model('CreateProject', CreateProjectSchema);

module.exports = CreateProject;