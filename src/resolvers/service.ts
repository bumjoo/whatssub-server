import * as jwt from 'jsonwebtoken';
import { Resolvers, UserResolvers } from '../generated/graphql';
import { AuthenticationError } from 'apollo-server-express';
import { Role } from '../types';

const SERVICE_ADDED = 'SERVICE_ADDED';
const SERVICE_UPDATED = 'SERVICE_UPDATED';
const SERVICE_DELETED = 'SERVICE_DELETED';

const resolver: Resolvers = {
  Query: {
    services: (_, args, { user, models }, info) => {
      if (!user) throw new AuthenticationError('User is not logged in');
      return models.Service.findAll();
    },
    service: (_, args, { user, models }) => {
      if (!user) throw new AuthenticationError('User is not logged in');
      return models.Service.findOne({ where: args });
    },
  },
  Mutation: {
    createService: async (_, args, { user, models, pubsub }) => {
      if (!user) throw new AuthenticationError('User is not logged in');

      try {
        const service = await models.Service.create(args.service, { raw: true });
        let subOption;
        if (args.subOption) {
          subOption = await models.SubOption.create({
            serviceId: service.id,
            ...args.subOption,
          }, { raw: true });
          service.subOption = subOption;
        }

        pubsub.publish(SERVICE_ADDED, service);
        return service;
      } catch (err) {
        throw new Error(err);
      }
    },
    updateService: async (_, args, { user, models, pubsub }) => {
      if (!user) throw new AuthenticationError('User is not logged in');

      try {
        models.Service.update(
          args,
          {
            where: {
              id: args.service.id,
            },
          },
          { raw: true }
        );
        let subOption;
        if (args.subOption) {
          subOption = await models.SubOption.findOne({
            where: { serviceId: args.service.id },
            raw: true,
          });
          if (subOption) {
            await models.SubOption.update(
              {
                ...args.subOption,
              },
              {
                where: {
                  serviceId: args.service.id,
                },
              },
              { raw: true },
            );
            subOption = await models.SubOption.findOne({
              where: { serviceId: args.service.id },
              raw: true,
            });
          } else {
            subOption = await models.SubOption.create(
              {
                ...args.subOption,
                serviceId: args.service.id,
              },
              { raw: true },
            );
          }
        }

        const service = await models.Service.findOne({
          where: {
            id: args.service.id,
          },
          raw: true,
        });
        service.subOption = subOption;

        pubsub.publish(SERVICE_UPDATED, { service });
        return service;
      } catch (err) {
        throw new Error(err);
      }
    },
    deleteService: async (_, args, { user, models, pubsub }) => {
      if (!user) throw new AuthenticationError('User is not logged in');

      try {
        const service = await models.Service.findOne({
          where: { id: args.id },
          raw: true,
        });
        if (!service) {
          throw new Error('No service exists to destroy');
        }
        await models.SubOption.destroy({
          where: {
            serviceId: service.id,
          },
        });
        await models.Service.destroy({
          where: {
            id: service.id,
          },
        });

        pubsub.publish(SERVICE_DELETED, { service });
        return service;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Subscription: {
    serviceAdded: {
      subscribe: (_, args, { pubsub }) => pubsub.asyncIterator([SERVICE_ADDED]),
    },
    serviceUpdated: {
      subscribe: (_, args, { pubsub }) => pubsub.asyncIterator([SERVICE_UPDATED]),
    },
    serviceDestroyed: {
      subscribe: (_, args, { pubsub }) => pubsub.asyncIterator([SERVICE_DELETED]),
    },
  },
};

export default resolver;
