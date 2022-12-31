const express = require('express');
const dotenv = require('dotenv');
require("./db/conn");
const cors = require('cors')

const app = express();
app.use(express.json())
dotenv.config({path:"config.env"});

const port = process.env.PORT || 3001

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(cors({
    origin: ["http://localhost:8080", "http://localhost:5173", "*"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(require("./routes/addLink"))

app.get("/", (req, res)=>{
    res.send("Hello");
});

app.listen(port, ()=>{
    console.log("Listening on port : " + port)
});