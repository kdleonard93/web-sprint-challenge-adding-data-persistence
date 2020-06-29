exports.up = function (knex, Promise) {
  return knex.schema

    .createTable("Projects", (tbl) => {
      tbl.increments("id").unique();
      tbl.string("name", 255).notNullable();
      tbl.string("description", 255);
      tbl.boolean("Completed").notNullable().defaultTo(false);
    })

    .createTable("Resources", (tbl) => {
      tbl.increments("id").unique();
      tbl.string("name", 255).notNullable();
      tbl.string("description", 255);
      tbl
        .integer("projects_id")
        .unsigned()
        .references("projects.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })

    .createTable("Tasks", (tbl) => {
      tbl.increments("id").unique();
      tbl.string("description", 255).notNullable();
      tbl.string("notes", 255).notNullable();
      tbl.boolean("Completed").notNullable().defaultTo(false);
    })
    .createTable("project_resources", (tbl) => {
      tbl.increments("id");
      //foreign keys
      tbl
        .integer("project_id")
        .unsigned()
        .references("project.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("resources_id")
        .unsigned()
        .references("resources.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl.string("name", 255).notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("project_resources");
};
