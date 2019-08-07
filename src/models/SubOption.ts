import {
  Model,
  UUID,
  UUIDV4,
  INTEGER,
  ENUM,
  DATE,
  DECIMAL,
  STRING,
} from 'sequelize';

import sequelize from '../db';
import Service from './Service';
import Product from './Product';
import CustomService from './CustomService';

class SubOption extends Model {};
SubOption.init({
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  pricePlan: {
    type: DECIMAL(10, 2),
    allowNull: false,
  },
  pricePlanCurrency: {
    type: ENUM('USD', 'KRW'),
    defaultValue: 'USD',
  },
  promotion: STRING, // Best suite for enum but currently this is very indefinite.
}, {
  sequelize,
  modelName: 'sub_option',
  timestamps: true,
  createdAt: 'created',
  updatedAt: 'updated',
});

Product.hasOne(SubOption);
SubOption.belongsTo(Product);
Service.hasOne(SubOption);
SubOption.belongsTo(Service);
CustomService.hasOne(SubOption);
SubOption.belongsTo(CustomService);

export default SubOption;
