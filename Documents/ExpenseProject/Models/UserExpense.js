const Sequelize=require('sequelize')
const sequelize = require('../Util/database')

const User=sequelize.define('userexp',{

    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    
    Amount:{
        type:Sequelize.STRING,
        allowNull:false
    },

    Description:{
        type:Sequelize.STRING,
        allowNull:false
    },

    Category:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=User