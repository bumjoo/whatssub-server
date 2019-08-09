import * as jwt from 'jsonwebtoken';
import { Resolvers, UserResolvers } from '../generated/graphql';
import { AuthenticationError } from 'apollo-server-express';
import { Role } from '../types';

const ADMIN_ADDED = 'ADMIN_ADDED';

const resolver: Resolvers = {
  Query: {
    admins: (_, args, { user, models }, info) => {
      if (!user) throw new AuthenticationError('User is not logged in');
      return models.Admin.findAll();
    },
    admin: (_, args, { user, models }) => {
      if (!user) throw new AuthenticationError('User is not logged in');
      return models.Admin.findOne({ where: args });
    },
    signInAdmin: async (_, args, { appSecret, user, models, pubsub }) => {
      if (!user) throw new AuthenticationError('User is not logged in');
      return models.Admin.findOne({ where: args });
    },
  },
  Mutation: {
    signUpAdmin: async (_, args, { appSecret, models, pubsub }) => {
      if (!args.admin.email) {
        throw new Error('No email address is given.');
      } else if (args.admin.email) {
        const emailUser: any = await models.Admin.findOne({
          where: {
            email: args.admin.email,
          },
          raw: true,
        });

        if (emailUser) {
          throw new Error('Email for current user is already signed up.');
        }
      }

      try {
        const admin = await models.Admin.create(args.admin, { raw: true });
        const token: string = jwt.sign({
          userId: admin.id,
          role: Role.Admin,
        }, appSecret);

        pubsub.publish(ADMIN_ADDED, {
          adminAdded: admin,
        });
        return { token, admin };
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Subscription: {
    adminAdded: {
      subscribe: (_, args, { pubsub }) => pubsub.asyncIterator([ADMIN_ADDED]),
    },
  },
};

export default resolver;
