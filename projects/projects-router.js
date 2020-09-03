const express = require("express");
const Projects = require('./project-model')
const router = express.Router()

router.get("/", async (req, res, next) => {
    try{
        const projects = await Projects.find()
        res.json(projects)
    }
    catch(err){
        next(err)
    }
})

router.post("/", (req, res, next) => {
    const projectData = req.body;
    Projects.add(projectData)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to create a new project"})
    })
})

module.exports = router;