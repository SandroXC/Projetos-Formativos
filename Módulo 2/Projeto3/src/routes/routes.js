const routes = require("express").Router();
const ProjectController = require("../controllers/ProjectController");

routes.get("/", ProjectController.getAll);

module.exports = routes;
