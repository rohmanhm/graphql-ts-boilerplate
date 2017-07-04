import { resolve } from 'path'
import { existsSync } from 'fs'

const defaultConfig = {
  port: 3000,
  env: process.env.NODE_ENV,
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT
  },
  endpoint: {
    graphql: '/graphql',
    graphiql: '/graphiql'
  }
}

type ConfigKey = typeof defaultConfig

let config: ConfigKey
switch (defaultConfig.env) {
  case 'production':
    config = { ...defaultConfig, ...require('./prod') }
    break
  case 'test':
    config = { ...defaultConfig, ...require('./test') }
    break
  // Development config environment
  default:
    config = { ...defaultConfig, ...require('./dev') }
    break
}

export default config
