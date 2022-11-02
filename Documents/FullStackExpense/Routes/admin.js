const express=require('express')

const router=express()
const adminController=require('../Controllers/admin')

router.get('/users',adminController.getUser)

router.post('/addUser',adminController.postAdduser)

router.delete('/deleteUser/:id',adminController.deleteUser)

router.post('/editUser/:id',adminController.editUser)

module.exports=router;