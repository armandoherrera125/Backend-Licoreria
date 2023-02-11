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
    }
    // ,
    // price: {
    //     type: DataTypes.DECIMAL,
    //     allowNull: false,

    // },
    // quantity: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     defaultValue:0
    // },
    // state: {
    //     type: DataTypes.TINYINT,
    //     allowNull: true,
    //     defaultValue: 1
    // },
});
module.exports = {
    Product
}
// User.hasMany(Role);
// User.hasMany(Category);
// Category.belongsTo(User);
//Product.hasMany(Category);
