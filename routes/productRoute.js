const productController = require("../controller/productController");

const router = require('express').Router();

router.post('/addProduct', productController.addProduct);

router.get('/getAllProducts', productController.getAllProducts);

router.get('/getOneProducts/:id', productController.getOneProducts);

router.delete('/deleteProduct/:id', productController.deleteProduct);

router.put('/updateProduct/:id', productController.updateProduct);

router.get('/publishedProduct', productController.publishedProduct);

module.exports = router;