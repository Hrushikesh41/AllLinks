const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectName : {
        type : String,
        required : true,
    },
    projectLink : {
        type : String,
        required : true,
    },
    projectRepo : {
        type : String
    }
})

const projectModel = new mongoose.model("PROJECTS", projectSchema);

module.exports = projectModel;