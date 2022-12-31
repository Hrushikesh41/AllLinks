const mongoose = require('mongoose');

const socialSchema = new mongoose.Schema({
    socialPlatform : {
        type : String,
        required : true,
    },
    socialLink : {
        type : String,
        required : true,
    }
})

const socialModel = new mongoose.model("SOCIAL", socialSchema);

module.exports = socialModel;