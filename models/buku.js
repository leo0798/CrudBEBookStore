'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class buku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      buku.belongsTo(models.penjual,{foreignKey: 'penjualId'});
      buku.belongsTo(models.pembeli,{foreignKey: 'pembeliId'});
    }
  }
  buku.init({
    nama: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    foto: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    penjualId: DataTypes.INTEGER,
    pembeliId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'buku',
  });
  return buku;
};