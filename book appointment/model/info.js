const Sequelize =require('sequelize');
const sequelize=require('../util/database');
const Info= sequelize.define(('info'),{
    Id:{
     type: Sequelize.INTEGER,
     autoIncrement: true,
     allowNull:false,
     primaryKey:true
    },
    name:{
        type: Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    phoneNumber:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    }
       
    });
    module.exports=Info
