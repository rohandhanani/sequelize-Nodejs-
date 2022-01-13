const Product = require("../model/productModel")

// addProduct 
const addProduct = async(req, res) => {
    try {
        let info = {
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            published: req.body.published ? req.body.published : false,
        }

        const product = await Product.create(info)
        res.status(200).json({
            message: "Product insert",
            status: 200,
            data: product
        })
    } catch (error) {
        res.status(400).json({
            message: "Product not insert",
            status: 400
        });
    }
}

// getAllProducts
const getAllProducts = async(req, res) => {
    try {
        const products = await Product.findAll({});
        // const products = await Product.findAll({
        //     attributes:[
        //         'title',
        //         'price'
        //     ]
        // })
        res.status(200).json({
            message: "All product",
            status: 200,
            data: products
        })
    } catch (error) {
        res.status(400).json({
            message: "product not display",
            status: 400
        });
    }
}

// getOneProducts
const getOneProducts = async(req, res) => {
    try {
        const id = req.params.id;
        const oneProduct = await Product.findOne({ where: { id: id } });
        res.status(200).json({
            message: "Product display",
            status: 200,
            data: oneProduct
        })
    } catch (error) {
        res.status(400).json({
            message: "product not display",
            status: 400
        });
    }
}

// updateProduct
const updateProduct = async(req, res) => {
    try {
        const id = req.params.id;
        const updateProduct = await Product.update(req.body, { where: { id: id } });
        res.status(200).json({
            message: "Product updated",
            status: 200,
            data: updateProduct,
        })
    } catch (error) {
        res.status(400).json({
            message: "Product not updated..",
            status: 400
        });
    }
}

// deleteProduct
const deleteProduct = async(req, res) => {
    try {
        const id = req.params.id;
        await Product.destroy({ where: { id: id } });
        res.status(200).json({
            message: "product deleted",
            status: 200
        })
    } catch (error) {
        res.status(400).json({
            message: "product not deleted..",
            status: 400
        });
    }
}

// publishedProduct
const publishedProduct = async(req, res) => {
    try {
        const publishedProduct = await Product.findAll({ where: { published: true } });
        res.status(200).json({
            message: "product display",
            status: 200,
            data: publishedProduct
        });
    } catch (error) {
        res.status(400).json({
            message: "product not display",
            status: 400
        });
    }
}


module.exports = {
    addProduct,
    getAllProducts,
    getOneProducts,
    updateProduct,
    deleteProduct,
    publishedProduct
}