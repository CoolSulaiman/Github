const express=require('express')
const sequelize=require('./Util/database')
const app=express();
const bodyParser = require('body-parser');

const user=require('./Models/user')
var cors=require('cors')
app.use(cors());
app.use(bodyParser.json())
const adminRotes=require('./Routes/admin')

app.use(adminRotes)

sequelize
.sync()
.then(result=>{
    app.listen(8000)
})
.catch(err=>{
    console.log(err)
})



