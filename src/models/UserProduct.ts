import {
  Model,
  STRING,
  UUID,
  UUIDV4,
  INTEGER,
  ENUM,
  DATE,
  TEXT,
} from 'sequelize';

import sequelize from '../db';
import User from './User';
import Product from './Product';

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
