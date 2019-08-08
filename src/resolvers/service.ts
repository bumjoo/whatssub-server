import * as jwt from 'jsonwebtoken';
import { Resolvers, UserResolvers } from '../generated/graphql';
import { AuthenticationError } from 'apollo-server-express';
import { Role } from '../types';

const SERVICE_ADDED = 'SERVICE_ADDED';

const resolver: Resolvers = {
  Query: {
    services: (_, args, { user, models }, info) => {
      if (!user) throw new AuthenticationError('User is not logged in');
      return models.Service.findAll();
    },
    service: (_, args, { models }) => models.Service.findOne({ where: args }),
  },
  Mutation: {

  },
  Subscription: {
    serviceAdded: {
      subscribe: (_, args, { pubsub }) => pubsub.asyncIterator([SERVICE_ADDED]),
    },
  },
};

export default resolver;
