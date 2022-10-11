const express=require('express')
const app=express();

const adminRoutes=require('./route/admin')
const shopRoute=require('./route/shop')

app.use('/admin',adminRoutes)

app.use('/shop',shopRoute)

app.use((req,res,next)=>{

    res.status(404).send('<h1> Page Not Found</h1>')
})


app.listen(4000);


