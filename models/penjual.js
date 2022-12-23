'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class penjual extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      penjual.hasMany(models.buku,{foreignKey: 'penjualId'})
    }
  }
  penjual.init({
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    no_telepon: DataTypes.INTEGER,
    alamat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'penjual',
  });
  return penjual;
};