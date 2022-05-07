const Sequelize = require("sequelize");
const connection = require("../database/db");

const Project = connection.define(
  "project",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allownull: false,
    },
    descricao: {
      type: Sequelize.STRING,
      allownull: false,
    },
    direcao: {
      type: Sequelize.STRING,
      allownull: false,
    },
    imagem: {
      type: Sequelize.STRING,
      allownull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Project;
