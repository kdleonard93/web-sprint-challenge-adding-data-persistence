
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'Resource 1', description: "Love everything Gold"},
        {id: 2, name: 'Resource 2', description: "Love everything Silver"},
        {id: 3, name: 'Resource 3', description: "Love everything Bronze"}
      ]);
    });
};
