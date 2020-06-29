const knex = require("knex");
const knexfile = require("../knexfile");

// we must select the development object from our knexfile
const db = knex(knexfile.development);

// export for use in codebase
module.exports = db;
