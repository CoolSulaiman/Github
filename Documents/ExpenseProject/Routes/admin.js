const express=require('express')

const router=express()
const adminController=require('../Controller/admin')


router.post('/user/signup',adminController.PostUsers)

router.post('/user/login',adminController.postLogin)
module.exports=router;