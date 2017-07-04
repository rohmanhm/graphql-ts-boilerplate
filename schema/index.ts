import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql'

export default new GraphQLSchema({
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
