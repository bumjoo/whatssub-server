import Admin from './Admin';
import CustomService from './CustomService';
import { Model } from 'sequelize';

import Notification from './Notification';
import Product from './Product';
import Review from './Review';
import Service from './Service';
import SubOption from './SubOption';
import User from './User';
import UserProduct from './UserProduct';

const models = {
  User: User,
  Notification,
  Service,
  Product,
  SubOption,
  UserProduct,
  CustomService,
  Review,
  Admin,
};

export default models;
