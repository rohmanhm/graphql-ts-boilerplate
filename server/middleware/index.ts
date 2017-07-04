import * as Koa from 'koa'
import * as koaRouter from 'koa-router'

import GraphQLMiddleware from './GraphQLMiddleware'
import ParserMiddleware from './ParserMiddleware'

export default (server: Koa, router: koaRouter): void => {
  GraphQLMiddleware(server, router)
  ParserMiddleware(server)
}
