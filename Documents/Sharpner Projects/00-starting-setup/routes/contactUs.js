const path = require('path');
const express = require('express');

const contactController=require('../Controllers/contactUs')

const router =express.Router();

router.get('/contactUs',contactController.contact)

router.post('/sucess',contactController.sucess)
module.exports=router;