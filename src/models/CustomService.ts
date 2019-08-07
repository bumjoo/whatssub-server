import {
  Model,
  STRING,
  UUID,
  UUIDV4,
  INTEGER,
  DECIMAL,
  ENUM,
  TEXT,
  DATE,
} from 'sequelize';

import sequelize from '../db';
import User from './User';

class CustomService extends Model {};
CustomService.init({
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
    defaultValue: 1,
  },
  preiodType: {
    type: ENUM('YEAR', 'MONTH', 'DAY'),
    defaultValue: 'MONTH',
  },
  startBillingDate: DATE,
  endBillingDate: DATE,
  alertDate: DATE,
  memo: TEXT,
}, {
  sequelize,
  modelName: 'custom_service',
  timestamps: true,
  createdAt: 'created',
  updatedAt: 'updated',
  deletedAt: 'deleted',
});

User.hasMany(CustomService);
CustomService.belongsTo(User);

export default CustomService;
