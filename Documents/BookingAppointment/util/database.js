const Sequelize=require('sequelize')

const sequelize=new Sequelize('bookingapt','root','ameensab',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize