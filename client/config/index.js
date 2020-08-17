'use strict'
require('dotenv/config')

const baseUrl = {
  uri: '/api'
}
const { DB_NAME,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASS,
    SERVER_HOST,
    SERVER_NAME,
    SERVER_PORT } = process.env
module.exports = {
  server: {
    serverPort: SERVER_PORT,
    serverHost: SERVER_HOST,
    serverName: SERVER_NAME
  },
  secrets: {
    secret: 'c4ca4238a0b923820dcc509a6f75849b'
  },
  endpoints: {
    baseUrl: baseUrl.uri,
    exampleRoute: {
      uri: `${baseUrl.uri}/example-route`
    },
  },
  database: {
    database_name: DB_NAME,
    password: DB_PASS,
    user: DB_USER,
    port: DB_PORT,
    host: DB_HOST
    }
}
