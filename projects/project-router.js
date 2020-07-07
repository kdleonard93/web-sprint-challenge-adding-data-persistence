const express = require("express");
const project = require("./project-model");
const router = express.Router();

router.get("/", (req, res) => {
  project
    .get()
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed get projects" });
    });
});

router.post("/", (req, res) => {
  project
    .addProject(req.body)
    .then((project) => {
      res.status(201).json(req.body);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "error",
      });
    });
});

module.exports = router;
