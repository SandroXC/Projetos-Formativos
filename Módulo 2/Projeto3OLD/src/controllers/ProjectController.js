const Project = require("../models/Project");

const getAll = async (req, res) => {
  try {
    const filmes = await Project.findAll();
    res.render("index", { filmes, project: undefined });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

module.exports = {
  getAll,
};
