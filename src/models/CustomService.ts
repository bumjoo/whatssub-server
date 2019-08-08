import {
  DATE,
  DECIMAL,
  ENUM,
  INTEGER,
  Model,
  STRING,
  TEXT,
  UUID,
  UUIDV4,
} from 'sequelize';

import User from './User';
import sequelize from '../db';

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
  // createdAt: 'created',
  // updatedAt: 'updated',
  paranoid: true,
});

User.hasMany(CustomService);
CustomService.belongsTo(User);

export default CustomService;
