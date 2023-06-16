const express=require('express');
const app=express();
const bodyParser=require('body-parser');
var cors=require('cors');

const sequelize=require('./util/database');
const infoRoute=require('./route/info');

app.use(cors());
app.use(bodyParser.json());

app.use(infoRoute);
sequelize.sync();
app.listen(3005);
