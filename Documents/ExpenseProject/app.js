const express=require('express')

const app=express()
const bycrpt=require('bcrypt')
const sequelize=require('./Util/database')
const bodyParser = require('body-parser');
const adminRoutes=require('./Routes/admin')
const expenRoutes=require('./Routes/expen')

const userexp=require('./Models/UserExpense')

var cors=require('cors');
const User = require('./Models/user');
const UserExp = require('./Models/UserExpense');
const Expense = require('./Models/UserExpense');
app.use(cors());
app.use(bodyParser.json())
app.use(adminRoutes)
app.use(expenRoutes)

User.hasMany(Expense)
Expense.belongsTo(User)


sequelize
// .sync({force:true})
.sync()
.then(result=>{
    app.listen(8000)
})
.catch(err=>{
    console.log(err)
})


