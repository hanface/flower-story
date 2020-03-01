
exports.up = function(knex) {
  return knex.schema.createTable('flowers', function (table) {
    table.increments().primary()
    table.string('name')
    table.string('desc')
    table.string('photo')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('flowers')
};
