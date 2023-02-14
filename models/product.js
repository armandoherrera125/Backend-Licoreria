const { sequelize } = require("../db/connection");
const {Sequelize, DataTypes, Model} = require("sequelize");
const Product = sequelize.define( 'Product', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    bodega: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estante: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});
module.exports = {
    Product
}
// User.hasMany(Role);
// User.hasMany(Category);
// Category.belongsTo(User);
//Product.hasMany(Category);
