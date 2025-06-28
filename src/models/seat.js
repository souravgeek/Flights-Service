'use strict';

const {enums} = require('../utils/common')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Seat.init({
    row:{
    type:  DataTypes.INTEGER,
    allowNull: false
    },
    col:{
    type:  DataTypes.STRING,
    allowNull:false
    },
    airplaneId:{
      type: DataTypes.INTEGER,
      allowNull:false
    } ,
    type: {
      type: DataTypes.ENUM,
      values: enums,
      defaultValue: enums.ECONOMY,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};