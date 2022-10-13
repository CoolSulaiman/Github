const express=require('express');
const path=require('path')
console.log("lover")
const router=express.Router();

router.get('/contactUs',(req,res,next)=>{
    
res.sendFile(path.join(__dirname,'..','..','views','contactus.html'))

})


router.post('/sucess',(req,res,next)=>{

    res.send('<h1> Form successfuly filled </h1>')
})
module.exports=router;