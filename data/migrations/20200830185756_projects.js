
exports.up = async function(knex) {
  
};

exports.down = async function(knex) {
  return knex.schema
  .dropTableIfExists("projects")
  .dropTableIfExists("tasks");
};
