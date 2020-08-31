
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Gold', description: "Gold Project", },
        {id: 2, name: 'Silver', description: "Silver Project"},
        {id: 3, name: 'Bronze', description: "Bronze Project"}
      ]);
    });
};
