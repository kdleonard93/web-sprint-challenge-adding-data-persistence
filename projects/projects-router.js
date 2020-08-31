const express = require("express");
const Projects = require('./project-model')
const router = express.Router()

router.get("/", async (req, res) => {
    Projects.find()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(error => {
        res.status(500).json({message: "Cannot Retrieve Projects"})
    })
})