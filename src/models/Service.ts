import { DataTypes, Model, STRING, UUID, UUIDV4, TEXT } from 'sequelize';

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
  createdAt: 'created',
  updatedAt: 'updated',
  deletedAt: 'deleted',
});

export default Service;
