const Sequelize=require('sequelize');
const sequelize= new Sequelize('node_complete','root','your_new_password',{dialect: 'mysql', host: 'localhost'});
module.exports = sequelize;