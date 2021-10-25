import { GraphQLInputObjectType, GraphQLString, GraphQLID } from 'graphql';

const insertOneContato = {
  data: {
    type: new GraphQLInputObjectType({
      name: 'datainsertOneContato',
      fields: {
        id_contato: { type: GraphQLID },
        nome: { type: GraphQLString },
        email: { type: GraphQLString }
      }
    })
  }
};

const inputs = {
  insertOneContato
};

export default inputs;
