const Sequelize =require('sequelize');
const sequelize=require('../util/database');
const Info= sequelize.define(('exp'),{
    Id:{
     type: Sequelize.INTEGER,
     autoIncrement: true,
     allowNull:false,
     primaryKey:true
    },
    amt:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    des:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    cat:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    }
       
    });
    module.exports=Info
