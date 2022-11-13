const Sequelize=require('sequelize')

const sequelize=new Sequelize('expro','root','ameensab',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize