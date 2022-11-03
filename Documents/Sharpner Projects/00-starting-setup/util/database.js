const Sequelize=require('sequelize')

const seqelize=new Sequelize('node-complete','root','ameensab',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=seqelize