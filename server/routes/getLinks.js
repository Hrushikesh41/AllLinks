const express = require("express");
require("../db/conn")
const gitModel = require("../models/git.models")
const npmModel = require("../models/npm.models")
const projectModel = require("../models/project.model")
const socialModel = require("../models/social.model")

const router = express.Router();

router.get("/getgit", async (req, res)=>{
    try {
        const fetch = await gitModel.find();
        return res.status(200).json({data : fetch})
        
    } catch (error) {
        return res.status(500).json({error : "Cannot fetch"})
    }
});

router.get("/getnpm", async (req, res)=>{
    try {
        const fetch = await npmModel.find();
        return res.status(200).json({data : fetch})
        
    } catch (error) {
        return res.status(500).json({error : "Cannot fetch"})
    }
});

router.get("/getprojects", async (req, res)=>{
    try {
        const fetch = await projectModel.find();
        return res.status(200).json({data : fetch})
        
    } catch (error) {
        return res.status(500).json({error : "Cannot fetch"})
    }
});

router.get("/getsocial", async (req, res)=>{
    try {
        const fetch = await socialModel.find();
        return res.status(200).json({data : fetch})
        
    } catch (error) {
        return res.status(500).json({error : "Cannot fetch"})
    }
});

module.exports = router;