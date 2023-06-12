const express=require('express');
const app=express();
const bodyParser=require('body-parser');
var cors=require('cors');

const sequelize=require('./util/database');
const infoRoute=require('./route/info');

app.use(cors());
app.use(bodyParser.json());


/*
const Info=require('./model/info.js');
app.get('/getAppointment',async(req,res,next)  =>{
    console.log('2.2')
    try{
     let result= await Info.findAll();
      res.status(200).json(result);
    
     }
      catch(err)
           {
            console.log(err);
           }
              });
*/
app.use(infoRoute);
sequelize.sync();
app.listen(8500);
