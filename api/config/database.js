// const path = require('path');
// strapi-api/config/database.js
module.exports = ({env}) => ({
  defaultConnection: "default",
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 2020),
      database: env('DATABASE_NAME', 'store'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', '2020'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
// module.exports = ({ env }) => {
//   const client = env('DATABASE_CLIENT', 'postgres');
//   const connections = {
//     // mysql: {
//     //   connection: {
//     //     connectionString: env('DATABASE_URL'),
//     //     host: env('DATABASE_HOST', 'localhost'),
//     //     port: env.int('DATABASE_PORT', 3306),
//     //     database: env('DATABASE_NAME', 'strapi'),
//     //     user: env('DATABASE_USERNAME', 'strapi'),
//     //     password: env('DATABASE_PASSWORD', 'strapi'),
//     //     ssl: env.bool('DATABASE_SSL', false) && {
//     //       key: env('DATABASE_SSL_KEY', undefined),
//     //       cert: env('DATABASE_SSL_CERT', undefined),
//     //       ca: env('DATABASE_SSL_CA', undefined),
//     //       capath: env('DATABASE_SSL_CAPATH', undefined),
//     //       cipher: env('DATABASE_SSL_CIPHER', undefined),
//     //       rejectUnauthorized: env.bool(
//     //         'DATABASE_SSL_REJECT_UNAUTHORIZED',
//     //         true
//     //       ),
//     //     },
//     //   },
//     //   pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
//     // },
//     // mysql2: {
//     //   connection: {
//     //     host: env('DATABASE_HOST', 'localhost'),
//     //     port: env.int('DATABASE_PORT', 3306),
//     //     database: env('DATABASE_NAME', 'strapi'),
//     //     user: env('DATABASE_USERNAME', 'strapi'),
//     //     password: env('DATABASE_PASSWORD', 'strapi'),
//     //     ssl: env.bool('DATABASE_SSL', false) && {
//     //       key: env('DATABASE_SSL_KEY', undefined),
//     //       cert: env('DATABASE_SSL_CERT', undefined),
//     //       ca: env('DATABASE_SSL_CA', undefined),
//     //       capath: env('DATABASE_SSL_CAPATH', undefined),
//     //       cipher: env('DATABASE_SSL_CIPHER', undefined),
//     //       rejectUnauthorized: env.bool(
//     //         'DATABASE_SSL_REJECT_UNAUTHORIZED',
//     //         true
//     //       ),
//     //     },
//     //   },
//     //   pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
//     // },
//     postgres: {
//       connection: {
//         connectionString: env('postgres'),
//         host: env('DATABASE_HOST', 'localhost'),
//         port: env.int('DATABASE_PORT', 5432),
//         database: env('DATABASE_NAME', 'store'),
//         user: env('DATABASE_USERNAME', 'postgres'),
//         password: env('DATABASE_PASSWORD', '2020'),
//         ssl: env.bool('DATABASE_SSL', false) && {
//           key: env('DATABASE_SSL_KEY', undefined),
//           cert: env('DATABASE_SSL_CERT', undefined),
//           ca: env('DATABASE_SSL_CA', undefined),
//           capath: env('DATABASE_SSL_CAPATH', undefined),
//           cipher: env('DATABASE_SSL_CIPHER', undefined),
//           rejectUnauthorized: env.bool(
//             'DATABASE_SSL_REJECT_UNAUTHORIZED',
//             true
//           ),
//         },
//         schema: env('DATABASE_SCHEMA', 'public'),
//       },
//       pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
//     },
//     // sqlite: {
//     //   connection: {
//     //     filename: path.join(
//     //       __dirname,
//     //       '..',
//     //       env('DATABASE_FILENAME', 'data.db')
//     //     ),
//     //   },
//     //   useNullAsDefault: true,
//     // },
//   };
//
//   return {
//     connection: {
//       client,
//       ...connections[client],
//       acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
//     },
//   };
// };