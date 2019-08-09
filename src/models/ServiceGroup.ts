import { DataTypes, Model, STRING, TEXT, UUID, UUIDV4 } from 'sequelize';

import sequelize from '../db';

class ServiceGroup extends Model {};
ServiceGroup.init({
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
}, {
  sequelize,
  modelName: 'serviceGroup',
  timestamps: true,
  // createdAt: 'created',
  // updatedAt: 'updated',
  paranoid: true,
});

export default ServiceGroup;
