
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: 'Resource 1', resource_description: "Love everything Gold"},
        {id: 2, resource_name: 'Resource 2', resource_description: "Love everything Silver"},
        {id: 3, resource_name: 'Resource 3', resource_description: "Love everything Bronze"}
      ]);
    });
};
