import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

const contatoType = new GraphQLObjectType({
  name: 'contatoType',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    nome: {
      type: GraphQLString
    },
    telefone: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    }
  })
});

export default contatoType;
