import * as jwt from 'jsonwebtoken';
import { Resolvers, UserResolvers } from '../generated/graphql';
import { AuthenticationError } from 'apollo-server-express';
import { Role } from '../types';

const SERVICE_ADDED = 'SERVICE_ADDED';
const SERVICE_UPDATED = 'SERVICE_UPDATED';
const SERVICE_DELETED = 'SERVICE_DELETED';

const resolver: Resolvers = {
  Query: {
    serviceGroups: (_, args, { user, models }, info) => {
      if (!user) throw new AuthenticationError('User is not logged in');
      return models.ServiceGroup.findAll();
    },
    serviceGroup: (_, args, { user, models }) => {
      if (!user) throw new AuthenticationError('User is not logged in');
      return models.ServiceGroup.findOne({ where: args });
    },
  },
  Mutation: {

  },
  Subscription: {

  },
};

export default resolver;
