const express=require('express')

const router=express()
const adminController=require('../Controller/expen')

router.get('/getuser',adminController.getUser)

router.post('/addUser',adminController.postAdduser)

router.delete('/deleteUser/:id',adminController.deleteUser)

// router.post('/editUser/:id',adminController.editUser)

module.exports=router;