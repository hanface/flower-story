
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('flowers').del()
    .then(function () {
      // Inserts seed entries
      return knex('flowers').insert([
        {id: 2, name: 'Magnolia', desc: 'One of the only flowers you will see in the depths of winter', photo: '/images/magnolia.png'},
        {id: 4, name: 'Sunflower', desc: 'Cute and sunny vibes', photo: '/images/sunflower.png'},
        {id: 5, name: 'Lily', desc: 'A beautiful Christmas flower', photo: '/images/lily.png'}
      ]);
    });
};
