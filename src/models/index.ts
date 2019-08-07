import { Model } from 'sequelize';

import User from './User';
import Notification from './Notification';
import Service from './Service';
import Product from './Product';
import SubOption from './SubOption';
import UserProduct from './UserProduct';
import CustomService from './CustomService';
import Review from './Review';
import Admin from './Admin';

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
