import { DataTypes, Model, STRING, TEXT, UUID, UUIDV4 } from 'sequelize';

import Service from './Service';
import ServiceGroup from './ServiceGroup';
import sequelize from '../db';

class ServiceGroupRating extends Model {};
ServiceGroupRating.init({
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
  modelName: 'serviceGroupRating',
  timestamps: true,
});

ServiceGroup.hasMany(ServiceGroupRating);
ServiceGroupRating.belongsTo(ServiceGroup);
Service.hasMany(ServiceGroupRating);
ServiceGroupRating.belongsTo(Service);

export default ServiceGroupRating;
