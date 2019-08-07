import * as cors from 'cors';
import * as path from 'path';
import * as jwt from 'jsonwebtoken';
import * as express from 'express';

import { Model } from 'sequelize';
import { importSchema } from 'graphql-import';
import { createServer } from 'http';
import { ApolloServer, PubSub } from 'apollo-server-express';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import { Http2Server } from 'http2';

import { Role } from './types';
import models from './models';
require('dotenv').config();

const {
  PORT = 4000,
  JWT_SECRET = 'undefined',
} = process.env;

const pubsub = new PubSub();
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const getUser = async (token: string, models) => {
  try {
    const verified: object | string | any = jwt.verify(token, JWT_SECRET);
    if (verified.role === Role.Admin) {
      const currentUser = await models.Admin.findOne({
        where: {
          id: verified.userId,
        },
      });
      return {
        id: currentUser.id,
        role: verified.role,
      };
    } else {
      const currentUser = await models.User.findOne({
        where: {
          id: verified.userId,
        },
      });
      return {
        id: currentUser.id,
        role: verified.role,
      };
    }
  } catch (err) {
    return null;
  }
};

const typeDefs = importSchema('schemas/schema.graphql');

async function startServer (): Promise<Http2Server> {
  const apollo = new ApolloServer({
    // typeDefs: './schema.graphql',
    // middlewares: [authMiddleware(JWT_SECRET)],
    typeDefs,
    context: async ({ req }) => {
      const authHeader = req.get('Authorization');
      let user = null;
      if (authHeader) {
        const token = authHeader.replace('Bearer ', '');
        user = await getUser(token, models);
      }
      return {
        user,
        models,
        pubsub,
        appSecret: JWT_SECRET,
      };
    },
    resolvers,
    subscriptions: {
      onConnect: () => console.log('Connected to websocket'),
    },
  });

  const app = express();
  app.use(cors());

  app.get('/', (req, res) => {
    res.send('It works!!!!');
  });
  apollo.applyMiddleware({ app });

  const httpServer = createServer(app);
  apollo.installSubscriptionHandlers(httpServer);

  const server = httpServer.listen({ port: PORT }, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${apollo.graphqlPath}`);
  });

  return server;
};

export {
  startServer,
};
