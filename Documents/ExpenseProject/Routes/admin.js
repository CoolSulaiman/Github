const express=require('express')

const router=express()
const adminController=require('../Controller/admin')


router.post('/user/signup',adminController.PostUsers)
module.exports=router;