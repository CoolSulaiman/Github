const User=require('../models/user')
const express = require('express');

const router=express.Router()

const adminContoller=require('../Controllers/admin')



router.get('/Users',adminContoller.getUsers)
router.post('/addUsers',adminContoller.postUser)

router.delete('/deleteUser/:id',adminContoller.deleteUser)
module.exports = router;
