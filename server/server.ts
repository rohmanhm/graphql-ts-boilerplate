import * as Koa from 'koa'
import * as koaRouter from 'koa-router'
import * as koaBody from 'koa-bodyparser'

import config from '@/config'
import Middlewares from './middleware'

export interface IServer {
  start (port: number): void
  middleware (): void
}

export class Server implements IServer {
  protected app: Koa
  protected router: koaRouter
  protected port: number | void

  constructor (port: number) {
    this.port = port
    this.app = new Koa()
    this.router = new koaRouter()

    return this
  }

  /**
   * Fire and start the server
   *
   * @param {number} [port]
   * @returns {IServer}
   */
  public start (): Koa {
    this.app.listen(this.port)

    // Tell server to use middleware
    this.middleware()
    return this.app
  }

  /**
   * Apply middleware to server
   *
   * @param {}
   */
  public middleware (): IServer {
    // Enable koa-router middleware
    this.app.use(this.router.routes())
    this.app.use(this.router.allowedMethods())

    Middlewares(this.app, this.router)
    return this
  }
}
