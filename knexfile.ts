import type { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

type KnexConfig = Record<string, Knex.Config>;

const config: KnexConfig = {
  development: {
    client: "postgresql",
    connection: {
      database: process.env.DBNAME,
      user: process.env.DBUSER,
      password: process.env.DBPASS,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeders",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: process.env.STAGING_DBNAME,
      user: process.env.STAGING_DBUSER,
      password: process.env.STAGING_DBPASS,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeders",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: process.env.PROD_DBNAME,
      user: process.env.PROD_DBUSER,
      password: process.env.PROD_DBPASS,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeders",
    },
  },
};

export default config;
