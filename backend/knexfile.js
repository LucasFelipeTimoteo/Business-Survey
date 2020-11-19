// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: "localhost",
      user: "root",
      password: "fullstackdev",
      database: "business_survey"
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }
};
