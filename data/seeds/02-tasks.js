
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task_description: "Get the gold", notes: "Just a few details about gold"},
        {id: 2, task_description: "Get the silver", notes: "Just a few details about silver"},
        {id: 3, task_description: "Get the bronze", notes: "Just a few details about bronze"}
      ]);
    });
};
