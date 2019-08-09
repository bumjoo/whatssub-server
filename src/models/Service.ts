import { DataTypes, Model, STRING, TEXT, UUID, UUIDV4 } from 'sequelize';

import ServiceGroup from './ServiceGroup';
import sequelize from '../db';

class Service extends Model {};
Service.init({
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
  thumbnail: {
    type: STRING,
    allowNull: false,
  },
  image: {
    type: STRING,
    allowNull: false,
  },
  homepage: STRING,
  iosAppStoreUrl: STRING,
  androidPlayStoreUrl: STRING,
  memo: TEXT,
}, {
  sequelize,
  modelName: 'service',
  timestamps: true,
  // createdAt: 'created',
  // updatedAt: 'updated',
  paranoid: true,
});

ServiceGroup.hasMany(Service);
Service.belongsTo(ServiceGroup);

export default Service;
