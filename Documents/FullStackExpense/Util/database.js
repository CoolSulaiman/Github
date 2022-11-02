const Sequelize=require('sequelize')

const sequelize=new Sequelize('expense','root','ameensab',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize