export default () => ({
  PORT: parseInt(process.env.PORT, 10) || 5000, // need to change port for particular services
  HOST: '0.0.0.0',
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_REFRESH_TOKEN_SECRET: process.env.JWT_REFRESH_TOKEN_SECRET,
  AUTH_PUBLIC_KEY: process.env.PUBLIC_KEY,
  AUTH_KEY: {
    [process.env.PUBLIC_KEY]: process.env.PRIVATE_KEY,
  },
  PG_DB_CONFIG: {
    dbuser: process.env.DB_DBUSER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    ssl: process.env.DB_SSL !== 'false' ? true : false,
  },
});
