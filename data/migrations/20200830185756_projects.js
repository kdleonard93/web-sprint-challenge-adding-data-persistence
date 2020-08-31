exports.up = async function (knex) {
  await knex.schema.createTable("projects", (table) => {
    table.increments();
    table.text("project_name", 255).unique().notNull();
    table.text("project_description");
    table.boolean("project_completion").notNull().defaultTo(false);
  });

  await knex.schema.createTable("resources", (table) => {
    table.increments();
    table.text("resource_name", 255).notNull();
    table.text("resource_description");
  });

  await knex.schema.createTable("tasks", (table) => {
    table.increments();
    table.text("task_description", 255).notNull();
    table.text("notes").notNull();
    table.boolean("task_completion").notNull().defaultTo(false);
    table
      .integer("project_id")
      .unsigned()
      .notNull()
      .references("project_id")
      .inTable("projects")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });

  await knex.schema.createTable("project_resources", (table) => {
    table
      .integer("projects_id")
      .unsigned()
      .notNull()
      .references("project.id")
      .inTable("projects")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("resources_id")
      .unsigned()
      .notNull()
      .references("resources.id")
      .inTable("resources")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.primary(["project_id", "resource_id"]);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("project_resources");
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("projects");
};
