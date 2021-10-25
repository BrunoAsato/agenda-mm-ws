import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import agendaSchema from './agenda';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...agendaSchema.queries
  }
});

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    ...agendaSchema.mutations
  }
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});

export default schema;
