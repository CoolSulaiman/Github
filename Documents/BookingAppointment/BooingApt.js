const express = require('express');
const app=express();
const bodyParser = require('body-parser');
var cors=require('cors')
app.use(cors());
app.use(bodyParser.json());

const adminRoute= require('./routes/admin')

const sequelize= require('./util/database')
app.use(adminRoute)
const User=require('./models/user')


sequelize
.sync()
.then(result=>{
    app.listen(2000)


})
.catch(err=>{
    console.log(err)
})




