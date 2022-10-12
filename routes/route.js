const express = require('express');
const userController = require('../controller/userController')
const productController = require('../controller/productController')

const router = express.Router();

router.post('/signup', userController.userRegister);
router.post('/login', userController.userLogin);

router.get('/products', productController.getProducts);
router.get('/product/:id', productController.getProductById)

module.exports = router;