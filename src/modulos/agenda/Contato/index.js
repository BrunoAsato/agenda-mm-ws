import { GraphQLList } from 'graphql';
import contatoType from './typeDefs';
import aduboResolvers from './resolvers';

const getAllContatos = {
  type: GraphQLList(contatoType),
  resolve: aduboResolvers.getAllContatos
};

const getContatoById = {
  type: GraphQLList(contatoType),
  args: {
    id_contato: {
      type: GraphQLNonNull(GraphQLInt)
    }
  },
  resolve: aduboResolvers.getAllContatos
};

const schema = {
  queries: { getAllContatos, getContatoById },
  mutations: {}
};

export default schema;
