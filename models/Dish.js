// Here is where we set up our Dish model, for when we are ready to connect to a database in future activities.

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dish extends Model {}

Dish.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    employee_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    completed_classes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    incomplete: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year_class: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'dish'
  }
);

module.exports = Dish;
