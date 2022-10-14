const express=require('express');
console.log("lover")
const router=express.Router();
const controllercontact=require('../../Controller/contactUs')

router.get('/contactUs',controllercontact.contactUscontroller)


router.post('/sucess',controllercontact.contactPostsuccess)
module.exports=router;