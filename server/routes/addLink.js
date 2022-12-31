const express = require("express");
require("../db/conn")
const gitModel = require("../models/git.models")
const npmModel = require("../models/npm.models")
const projectModel = require("../models/project.model")
const socialModel = require("../models/social.model")

const router = express.Router();

router.post("/addgit", async (req, res) => {
    const { gitCommand } = req.body;

    if (gitCommand == undefined || !gitCommand) {
        return res.status(400).json({ error: "Please Enter GIT Command" })
    }
    else {
        try {

            const fetch = await gitModel.findOne({gitCommand});

            if (fetch) {
                return res.status(502).json({ error: "Git Command Already Added" })
            } else {
                const add = new gitModel({gitCommand});
                const result = await add.save();

                if (result) {
                    return res.status(200).json({ message: "Command Added Successfully" });
                } else {
                    return res.status(500).json({ error: "Some Error Occurred" })
                }
                
            }

        } catch (error) {
            return res.status(502).json({ error: "Error Occurred While Adding Command" })
        }
    }
});

router.post("/addnpm", async (req, res) => {
    const { npmCommand } = req.body;

    if (npmCommand == undefined || !npmCommand) {
        return res.status(400).json({ error: "Please Enter NPM Command" })
    }
    else {
        try {

            const fetch = await npmModel.findOne({npmCommand});

            if (fetch) {
                return res.status(502).json({ error: "NPM Command Already Added" })
            } else {
                const add = new npmModel({npmCommand});
                const result = await add.save();

                if (result) {
                    return res.status(200).json({ message: "Command Added Successfully Successfully" });
                } else {
                    return res.status(500).json({ error: "Some Error Occurred" })
                }
                
            }

        } catch (error) {
            return res.status(502).json({ error: "Error Occurred While Adding Command" })
        }
    }
});

router.post("/addproject", async (req, res) => {
    const { projectName, projectLink, projectRepo } = req.body;

    if (projectName == undefined || !projectName || projectLink == undefined || !projectLink || projectRepo == undefined | !projectRepo) {
        return res.status(400).json({ error: "Please Enter  Project Details" })
    }
    else {
        try {

            const fetch = await projectModel.findOne({projectName});

            if (fetch) {
                return res.status(502).json({ error: "Project Already Exist" })
            } else {
                const add = new projectModel({projectName, projectLink, projectRepo});
                const result = await add.save();

                if (result) {
                    return res.status(200).json({ message: "Project Added Successfully Successfully" });
                } else {
                    return res.status(500).json({ error: "Some Error Occurred" })
                }
                
            }

        } catch (error) {
            return res.status(502).json({ error: "Error Occurred While Adding Project" })
        }
    }
});

router.post("/addsocial", async (req, res) => {
    const { socialPlatform, socialLink } = req.body;

    if (socialPlatform == undefined || !socialPlatform|| socialLink == undefined || !socialLink) {
        return res.status(400).json({ error: "Please Enter  Social Platform Details" })
    }
    else {
        try {

            const fetch = await socialModel.findOne({socialPlatform});

            if (fetch) {
                return res.status(502).json({ error: "Platform Already Exist" })
            } else {
                const add = new socialModel({socialPlatform, socialLink});
                const result = await add.save();

                if (result) {
                    return res.status(200).json({ message: "Platform Link Added Successfully Successfully" });
                } else {
                    return res.status(500).json({ error: "Some Error Occurred" })
                }
                
            }

        } catch (error) {
            return res.status(502).json({ error: "Error Occurred While Adding Platform Link" })
        }
    }
});


module.exports = router;