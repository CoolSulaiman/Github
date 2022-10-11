const express = require('express');
const bodyParser=require('body-parser')
const router=express.Router()

router.get('/addproduct',(req,res,next)=>{
    console.log("Get request --Adding product");
    res.send('<form action=/admin/addproduct method="POST"><label for="html">Product : </label><input type=text name="title"><label for="html">Size : </label> <input type=text name="size"><button type=submit>Add product</button></form>')
    

})
router.use(bodyParser.urlencoded({extended:false}))

router.post('/addproduct',(req,res,next)=>{
    console.log(req.body);
    console.log("Post req. from admin")
   res.redirect('/shop');
})


module.exports=router