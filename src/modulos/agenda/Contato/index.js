import { GraphQLList, GraphQLNonNull, GraphQLInt } from 'graphql';
import contatoType from './typeDefs';
import contatoResolvers from './resolvers';
import inputs from './inputs';

const getAllContatos = {
  type: GraphQLList(contatoType),
  resolve: contatoResolvers.getAllContatos
};

const getContatoById = {
  type: contatoType,
  args: inputs.getContatoById,
  resolve: contatoResolvers.getContatoById
};

const insertContato = {
  type: contatoType,
  args: inputs.insertContato,
  resolve: contatoResolvers.insertContato
};

const updateContato = {
  type: contatoType,
  args: inputs.updateContato,
  resolve: contatoResolvers.updateContato
};

const removeContato = {
  type: GraphQLList(contatoType),
  args: inputs.removeContato,
  resolve: contatoResolvers.removeContato
};

const schema = {
  queries: { getAllContatos, getContatoById },
  mutations: { insertContato, updateContato, removeContato }
};

export default schema;
