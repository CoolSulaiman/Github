const express=require('express')
const app=express();
const path= require('path')
const adminRoutes=require('./route/admin')
const shopRoute=require('./route/shop')

const contactUs=require('./route/contactUs')

app.use(express.static(path.join(__dirname,'..','public')));
app.use(express.static(path.join(__dirname,'..','public')));

app.use('/admin',adminRoutes)

app.use('/shop',shopRoute)

app.use(contactUs)


app.use((req,res,next)=>{

    res.sendFile(path.join(__dirname,'../','views','404.html'))
})


app.listen(4000);


