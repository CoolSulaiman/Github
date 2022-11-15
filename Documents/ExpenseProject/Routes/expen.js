const express=require('express')

const middleware=require('../middleware/auth')

const router=express()
const adminController=require('../Controller/expen')

router.get('/getuser', middleware.authentication ,adminController.getUser)

router.post('/addUser', middleware.authentication, adminController.postAdduser)

router.delete('/deleteUser/:id',  middleware.authentication, adminController.deleteUser)

// router.post('/editUser/:id',adminController.editUser)

module.exports=router;