const express = require('express');
const bodyParser=require('body-parser')
const router=express.Router()

const productController=require('../../Controller/product')
router.get('/addproduct',productController.getAddproduct)


router.use(bodyParser.urlencoded({extended:false}))
  
router.post('/addproduct',productController.postController)

module.exports=router