const mongoose = require('mongoose');

const npmSchema = new mongoose.Schema({
    npmCommand : {
        type : String,
        required : true,
    }
})

const npmModel = new mongoose.model("NPM", npmSchema);

module.exports = npmModel;