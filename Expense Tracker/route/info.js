const express=require('express');
const router=express.Router();
const path=require('path');
const infoController=require('../controller/info');
router.post('/bookA',infoController.bookA);
router.get('/getA',infoController.getA);
console.log('1')
router.delete('/deleteA/:Nid',infoController.deleteA);
router.put('/editA/:Nid',infoController.editA);
module.exports=router;