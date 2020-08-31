const db = require("../data/config");
const { first } = require("../data/config");

module.exports = {
  find,
  findByID,
  add,
};

function find() {
  return db("projects");
}

function findByID(id) {
  return db("projects").where({ id }).first();
}

function add(project) {
    return db("projects")
    .insert(project)
}
