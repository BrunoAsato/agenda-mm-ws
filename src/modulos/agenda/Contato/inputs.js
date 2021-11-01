import { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

const insertContato = {
  data: {
    type: new GraphQLInputObjectType({
      name: 'dataInsertContato',
      fields: {
        nome: { type: GraphQLString },
        telefone: { type: GraphQLString },
        email: { type: GraphQLString }
      }
    })
  }
};

const getContatoById = {
  query: {
    type: new GraphQLInputObjectType({
      name: 'queryGetContatoById',
      fields: {
        _id: { type: GraphQLNonNull(GraphQLString) }
      }
    })
  }
};

const updateContato = {
  query: {
    type: new GraphQLInputObjectType({
      name: 'queryUpdateContato',
      fields: {
        _id: { type: GraphQLNonNull(GraphQLString) }
      }
    })
  },
  data: {
    type: new GraphQLInputObjectType({
      name: 'dataUpdateContato',
      fields: {
        nome: { type: GraphQLNonNull(GraphQLString) },
        telefone: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) }
      }
    })
  }
};

const removeContato = {
  query: {
    type: new GraphQLInputObjectType({
      name: 'queryRemoveContato',
      fields: {
        _id: { type: GraphQLNonNull(GraphQLString) }
      }
    })
  }
};

const inputs = {
  insertContato,
  getContatoById,
  updateContato,
  removeContato
};

export default inputs;
