const express=require('express')

const app=express()
const bycrpt=require('bcrypt')
const sequelize=require('./Util/database')
const bodyParser = require('body-parser');
const adminRoutes=require('./Routes/admin')

var cors=require('cors')
app.use(cors());
app.use(bodyParser.json())
app.use(adminRoutes)

sequelize
// .sync({force:true})
.sync()
.then(result=>{
    app.listen(8000)
})
.catch(err=>{
    console.log(err)
})


