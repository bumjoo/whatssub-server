import { DECIMAL, ENUM, INTEGER, Model, STRING, TEXT, UUID, UUIDV4 } from 'sequelize';

import Service from './Service';
import sequelize from '../db';

class Product extends Model {};
Product.init({
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  category: STRING,
  price: {
    type: DECIMAL(10, 2),
    allowNull: false,
  },
  currency: {
    type: ENUM('USD', 'KRW'),
    defaultValue: 'USD',
  },
  periodUnit: {
    type: INTEGER,
    defaultValue: 0,
  },
  preiodType: {
    type: ENUM('YEAR', 'MONTH', 'DAY'),
    defaultValue: 'MONTH',
  },
  directLink: STRING,
  memo: TEXT,
}, {
  sequelize,
  modelName: 'product',
  timestamps: true,
  createdAt: 'created',
  updatedAt: 'updated',
  deletedAt: 'deleted',
});

Service.hasMany(Product);
Product.belongsTo(Service);

export default Product;
