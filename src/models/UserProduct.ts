import {
  DATE,
  ENUM,
  INTEGER,
  Model,
  STRING,
  TEXT,
  UUID,
  UUIDV4,
} from 'sequelize';

import Product from './Product';
import User from './User';
import sequelize from '../db';

class UserProduct extends Model {};
UserProduct.init({
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  startBillingDate: DATE,
  endBillingDate: DATE,
  alertDate: DATE,
  memo: TEXT,
}, {
  sequelize,
  modelName: 'user_product',
  timestamps: true,
  createdAt: 'created',
  updatedAt: 'updated',
  deletedAt: 'deleted',
});

User.hasMany(UserProduct);
UserProduct.belongsTo(User);
Product.hasMany(UserProduct);
UserProduct.belongsTo(Product);

export default UserProduct;
