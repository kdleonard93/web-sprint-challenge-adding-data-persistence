exports.up = function (knex, Promise) {
  return knex.schema.createTable("Projects", (tbl) => {
    tbl.increments();
    tbl.text("name", 128).unique().notNullable();
    tbl.decimal("budget").notNullable;
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("projects");
};
