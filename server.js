const express = require("express");
const projectRouter = require("./projects/projects-router");
// const resourceRouter = require("./resources/resource-router");
// const taskRouter = require("./tasks/tasks-router");
// const projectResourceRouter = require("./project_resources/project-resources-router");

const server = express();

server.use(express.json());
server.use("/api/projects", projectRouter)
// server.use("/api/resources", resourceRouter)
// server.use("/api/tasks", taskRouter)
// server.use("/api/project-resources", projectResourceRouter)

module.exports = server;
