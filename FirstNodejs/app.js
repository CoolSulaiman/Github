const express=require('express')
const app=express();
const path= require('path')
const adminRoutes=require('./route/admin.js')
const shopRoute=require('./route/shop.js')

const contactUs=require('./route/contactUs')

app.use(express.static(path.join(__dirname,'..','public')));
app.use(express.static(path.join(__dirname,'..','public')));

app.use('/admin',adminRoutes)

app.use('/shop',shopRoute)

app.use(contactUs)

const errorcontroller=require('../Controller/error')
app.use(errorcontroller.error404)


app.listen(4000);


