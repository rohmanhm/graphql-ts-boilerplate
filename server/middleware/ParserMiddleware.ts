import * as Koa from 'koa'
import * as koaBody from 'koa-bodyparser'

export default (server: Koa): void => {
  server.use(koaBody())
}
