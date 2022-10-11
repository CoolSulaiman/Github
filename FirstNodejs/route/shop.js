const express=require('express')

const router= express.Router();


router.get('/',(req,res,next)=>{
    console.log("Get request from Shop")
    res.send('<h1> Welcome express.js</h1>')
})

module.exports=router;