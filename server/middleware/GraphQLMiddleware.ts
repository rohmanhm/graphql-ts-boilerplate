import * as Koa from 'koa'
import * as koaRouter from 'koa-router'
import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa'
// import { GraphQLSchema } from 'graphql'
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql'

import config from '@/config'
// import schema from '@/schema'

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'haha',
    fields: {
      users: {
        type: GraphQLString,
        description: 'Show all users registered'
      }
    }
  })
})

export default (server: Koa, router: koaRouter): void => {
  router.post(config.endpoint.graphql, graphqlKoa({ schema }))
  router.get(config.endpoint.graphql, graphqlKoa({ schema }))
  router.get(config.endpoint.graphiql, graphiqlKoa({ endpointURL: config.endpoint.graphql }))
}
