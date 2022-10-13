const express=require('express')
const path=require('path');
const router= express.Router();

const rootdir=require('../../util/path')


router.get('/',(req,res,next)=>{
    console.log("Get request from Shop")
    res.sendFile(path.join(rootdir,'..','views','shop.html'))
}
)

module.exports=router;