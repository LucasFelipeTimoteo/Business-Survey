exports.up = knex => knex.schema.createTable('users', table => {
  table.increments('id')
  table.string('username', 200).notNullable()
  table.string('email', 200).unique().notNullable()
  table.string('password', 500).unique().notNullable()

  table.timestamp('created_at').defaultTo(knex.fn.now())
  table.timestamp('updated_at').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('users')