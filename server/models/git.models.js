const mongoose = require('mongoose');

const gitSchema = new mongoose.Schema({
    gitCommand : {
        type : String,
        required : true,
    }
})

const gitModel = new mongoose.model("GIT", gitSchema);

module.exports = gitModel;