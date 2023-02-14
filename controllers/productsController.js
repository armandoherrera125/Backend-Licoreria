const { request, response } = require("express");
const { getAmountOfProducts } = require("../helpers/CountProducts");
//const { getAmountOfProducts } = require("../helpers/CountProducts");
const {Product} = require('../models/product');
const productsGet = async( req = request, res = response ) => {
    const products = await Product.findAll({
        order: [
            ['name', 'ASC']
        ],
    });
    return res.status(200).json(
        {
            products
        }
    );
}
const productCreate = async( req = request, res = response ) => {
    let { name, price,bodega,estante } = req.body;
    price = parseFloat(price);
    const amountOfProducts = await getAmountOfProducts();
    const id = amountOfProducts + 1;
    const total = Number(bodega) + Number(estante);
    try {
        const creatingProduct = await Product.create({
            id,
            name,
            price,
            bodega,
            estante,
            total 
        });
        res.status(201).json({
            msg: 'Product created successfully',
            creatingProduct
        })
    } catch (error) {
        res.status(403).json({ error });
    }
};
const productEdit = async( req = request, res = response ) => {
    const {id} = req.params;
    const { name, price,bodega,estante } = req.body;
    const total = Number(bodega) + Number(estante);
    try {
        const editingProduct = await Product.update({
            name,
            price,
            bodega,
            estante,
            total
        },{
            where:{
                id
            }
        }
        );
        res.status(201).json({
            msg: 'Product updated successfully',
            editingProduct
        })
    } catch (error) {
        res.status(403).json({ error });
    }
};
// const productDelete = async( req = request, res = response ) => {
//     const { id } = req.params;
//     try {
//         const productDeleted = await Product.update({
//             state: false
//         },{
//             where:{
//                 id
//             }
//         });
//         res.status(200).json({
//             msg:'Product deleted successfully',
//             productDeleted
//         });
//     } catch (error) {
//         res.status(401).json({ error: error });
//     }
// };
module.exports = {
    productsGet,
    productCreate,
    productEdit,
    // productDelete
}