
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, name: 'Task 1', description: "Get the gold", notes: "Just a few details about gold"},
        {id: 2, name: 'Task 2', description: "Get the silver", notes: "Just a few details about silver"},
        {id: 3, name: 'Task 3', description: "Get the bronze", notes: "Just a few details about bronze"}
      ]);
    });
};
