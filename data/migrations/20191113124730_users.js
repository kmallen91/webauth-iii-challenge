exports.up = function(knex) {
  knex.schema.createTable("users", table => {
    table.increments();
    table
      .string("users", 128)
      .notNullable()
      .unique();
    table.string("password", 128).notNullable();
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("users");
};
