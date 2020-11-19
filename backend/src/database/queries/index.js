const knex = require('../../database')

module.exports.checkIfEmailExists = async (table, email) => {
  const result = await knex.select('email').from(table).where('email', email)
  return result
}

module.exports.getUser = async (table, email) => {
  const result = await knex.select('*').from(table).where('email', email)
  return result
}

module.exports.insertNewUser = async (table, userData) => {
  const result = await knex.insert(userData).into(table)
  return result
}