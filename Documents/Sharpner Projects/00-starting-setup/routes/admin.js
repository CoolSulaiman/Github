const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const productController=require('../Controllers/product')
const router = express.Router();

router.get('/add-product',productController.getAddProduct );

router.post('/add-product',productController.postAddProduct);

exports.routes = router;
module.exports = router;
