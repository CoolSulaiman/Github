const express = require('express');
const bodyParser=require('body-parser')
const path=require('path');
const router=express.Router()
const rootdir= require('../../util/path')

router.get('/addproduct',(req,res,next)=>{
    console.log("Get request --Adding product");
    res.sendFile(path.join(rootdir,'../','views','addproduct.html'))
    
})
router.use(bodyParser.urlencoded({extended:false}))

router.post('/addproduct',(req,res,next)=>{
    console.log(req.body);
    console.log("Post req. from admin")
   res.redirect('/shop');
})

module.exports=router