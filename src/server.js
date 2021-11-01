import environment from './config/environment';
import './lib/moduleAlias.js';
import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import http from 'http';
import schema from './modulos/schema.js';

async function startApolloServer(schema) {
  const app = express();
  const httpServer = http.createServer(app);

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
    playground: process.env.NODE_ENV === 'development'
  });

  await server.start();
  server.applyMiddleware({ app, path: '/' });

  const PORT = environment.port;
  await new Promise(resolve => httpServer.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
}
startApolloServer(schema);
