const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path : "config.env"});

const db = process.env.DB 

mongoose.connect(db, {useNewUrlParser : true, useUnifiedTopology : true})
.then(()=>{
    console.log("Connected to MongoDB");
}).catch((e)=>{
    console.log(e);
})