import { DECIMAL, Model, STRING, UUID, UUIDV4 } from 'sequelize';

import User from './User';
import sequelize from '../db';

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
  // createdAt: 'created',
  // updatedAt: 'updated',
  paranoid: true,
});

User.hasMany(Review);
Review.belongsTo(User);

export default Review;
