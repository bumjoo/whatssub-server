import { Model, STRING, UUID, UUIDV4, DECIMAL } from 'sequelize';

import sequelize from '../db';
import User from './User';

class Review extends Model {};
Review.init({
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  title: STRING,
  content: STRING,
  rating: {
    type: DECIMAL(2, 2),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'review',
  timestamps: true,
  createdAt: 'created',
  updatedAt: 'updated',
});

User.hasMany(Review);
Review.belongsTo(User);

export default Review;
