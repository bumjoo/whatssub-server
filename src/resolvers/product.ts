import * as jwt from 'jsonwebtoken';
import { Resolvers, UserResolvers } from '../generated/graphql';
import { AuthenticationError } from 'apollo-server-express';
import { Role } from '../types';

const PRODUCT_ADDED = 'PRODUCT_ADDED';
const PRODUCT_UPDATED = 'PRODUCT_UPDATED';
const PRODUCT_DELETED = 'PRODUCT_DELETED';

const resolver: Resolvers = {
  Query: {
    products: (_, args, { user, models }, info) => {
      if (!user) throw new AuthenticationError('User is not logged in');
      return models.Product.findAll();
    },
    product: (_, args, { user, models }) => {
      if (!user) throw new AuthenticationError('User is not logged in');
      return models.Product.findOne({ where: args });
    },
  },
  Mutation: {
    createProduct: async (_, args, { user, models, pubsub }) => {
      if (!user) throw new AuthenticationError('User is not logged in');

      try {
        const product = await models.Product.create(
          {
            serviceId: args.product.serviceId,
            ...args.product,
          },
          { raw: true }
        );
        let subOption;
        if (args.subOption) {
          subOption = await models.SubOption.create({
            productId: product.id,
            ...args.subOption,
          }, { raw: true });
          product.subOption = subOption;
        }

        pubsub.publish(PRODUCT_ADDED, product);
        return product;
      } catch (err) {
        throw new Error(err);
      }
    },
    updateProduct: async (_, args, { user, models, pubsub }) => {
      // if (!user) throw new AuthenticationError('User is not logged in');

      try {
        await models.Product.update(
          args.product,
          {
            where: {
              serviceId: args.product.id,
            },
          },
          { raw: true }
        );
        let subOption;
        if (args.subOption) {
          subOption = await models.SubOption.findOne({
            where: { productId: args.product.id },
            raw: true,
          });
          if (subOption) {
            await models.SubOption.update(
              {
                ...args.subOption,
              },
              {
                where: {
                  productId: args.product.id,
                },
              },
              { raw: true },
            );
            subOption = await models.SubOption.findOne({
              where: { productId: args.product.id },
              raw: true,
            });
          } else {
            subOption = await models.SubOption.create(
              {
                ...args.subOption,
                productId: args.product.id,
              },
              { raw: true },
            );
          }
        }

        const product = await models.Product.findOne({
          where: {
            id: args.product.id,
          },
          raw: true,
        });
        product.subOption = subOption;

        pubsub.publish(PRODUCT_UPDATED, { product });
        return product;
      } catch (err) {
        throw new Error(err);
      }
    },
    deleteProduct: async (_, args, { user, models, pubsub }) => {
      if (!user) throw new AuthenticationError('User is not logged in');

      try {
        const product = await models.Product.findOne({
          where: { id: args.id },
          raw: true,
        });
        if (!product) {
          throw new Error('No product exists to destroy');
        }
        models.SubOption.destroy({
          where: {
            productId: product.id,
          },
        });
        models.Product.destroy({
          where: {
            id: product.id,
          },
        });

        pubsub.publish(PRODUCT_DELETED, { product });
        return product;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Subscription: {
    productAdded: {
      subscribe: (_, args, { pubsub }) => pubsub.asyncIterator([PRODUCT_ADDED]),
    },
    productUpdated: {
      subscribe: (_, args, { pubsub }) => pubsub.asyncIterator([PRODUCT_UPDATED]),
    },
    productDestroyed: {
      subscribe: (_, args, { pubsub }) => pubsub.asyncIterator([PRODUCT_DELETED]),
    },
  },
  Product: {
    subOption: (_, args, { models }, info) => {
      return models.SubOption.findOne({
        where: {
          productId: _.id,
        },
      });
    },
  },
};

export default resolver;
