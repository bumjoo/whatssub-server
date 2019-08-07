import { DataTypes, Model } from 'sequelize';

import sequelize from '../db';

const { STRING, BOOLEAN, INTEGER, BIGINT, TEXT, UUID, UUIDV1, ENUM } = DataTypes;

class Admin extends Model {};
Admin.init({
  id: {
    type: UUID,
    defaultValue: UUIDV1,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  name: STRING,
  privilege: ENUM('ADMIN', 'MEMBER', 'VIEWER'),
}, {
  sequelize,
  modelName: 'admin',
  timestamps: true,
  createdAt: 'created',
  updatedAt: 'updated',
  deletedAt: 'deleted',
});

export default Admin;
