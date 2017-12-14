// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: "postgres://localhost/quantified_self",
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './seeds/'
    },
    useNullAsDefault: true
  },


  test: {
    client: 'pg',
    connection: "postgres://localhost/quantified_self_test",
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './seeds/test'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './seeds/'
    },
    useNullAsDefault: true
  }

};
