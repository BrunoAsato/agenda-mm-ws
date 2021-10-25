import ApolloServer, { gql } from 'apollo-server';
import db from 'utils/db';

const typeDefs = gql`
  type Contato {
    _id: String
    nome: String
    telefone: String
    email: String
  }

  type Query {
    Contato: [Contato]
  }

  type Mutation {
    AddContato(nome: String!, telefone: String!, email: String!): [Contato]
    RemoveContato(_id: String!): [Contato]
    EditContato(_id: String!, nome: String!, telefone: String!, email: String!): [Contato]
  }
`;

const getContatos = () =>
  new Promise(resolve => {
    db.agenda.find({}, (err, docs) => {
      resolve(docs);
    });
  });

const addContato = contato =>
  new Promise(resolve => {
    db.agenda.insert(contato, () => {
      db.agenda.find({}, (err, docs) => {
        resolve(docs);
      });
    });
  });

const removeContato = contato =>
  new Promise(resolve => {
    db.agenda.remove({ _id: contato._id }, {}, () => {
      db.agenda.find({}, (err, docs) => {
        resolve(docs);
      });
    });
  });

const editContato = contato =>
  new Promise(resolve => {
    db.agenda.update({ _id: contato._id }, contato, {}, () => {
      db.agenda.find({}, (err, docs) => {
        resolve(docs);
      });
    });
  });

const resolvers = {
  Query: {
    Contato: () => getContatos()
  },
  Mutation: {
    AddContato: (_, contato) => addContato(contato),
    RemoveContato: (_, contato) => removeContato(contato),
    Editcontato: (_, contato) => editContato(contato)
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  O servidor está rodando em: ${url}`);
});

/*
import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import importModels from './utils/importModels';
import { handleError } from '~/utils/getErrorMessages';
import './middleware/auth';
// schema do graphql
import schema from './modulos/schema';
import environment from './config/environment';
import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

// importar models
importModels(`${__dirname}/modulos/agenda`);

const app = express();
app.use(
  cors({
    origins: ['http://localhost:4000/'],
    allowHeaders: ['pragma', 'cache-control']
  })
);
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));

// aplicando server do apollo no app criado com express
const server = new ApolloServer({
  schema,
  formatError: err => {
    const error = handleError(err);
    logger.error({ message: err.extensions.exception.stacktrace[0], err });
    console.log('\n\n');
    console.log('Stack trace:     ');
    console.log(err.extensions.exception.stacktrace);
    delete error.sql;
    return error;
  },
  playground: process.env.NODE_ENV === 'development',
});

// unindo Apollo com o express
server.applyMiddleware({ app });

const PORT = environment.port;
app.listen(PORT, () => console.log(`🚀 Rodando serviço Apollo/Express na porta: ${PORT}`));
*/
