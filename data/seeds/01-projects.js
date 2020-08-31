
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Gold', project_description: "Gold Project", },
        {id: 2, project_name: 'Silver', project_description: "Silver Project"},
        {id: 3, project_name: 'Bronze', project_description: "Bronze Project"}
      ]);
    });
};
