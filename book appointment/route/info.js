const express=require('express');
const router=express.Router();
const path=require('path');
const infoController=require('../controller/info');
router.post('/bookAppointment',infoController.bookAppointment);
router.get('/getAppointment',infoController.getAppointment);
console.log('1')
router.delete('/deleteAppointment/:Nid',infoController.deleteAppointment);
router.put('/editAppointment/:Nid',infoController.editAppointment);
module.exports=router;