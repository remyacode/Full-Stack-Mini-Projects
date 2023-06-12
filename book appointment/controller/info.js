const Info=require('../model/info');
const path=require('path')

exports.bookAppointment= (req,res,next)=>{
const name=req.body.name;
const email=req.body.email;
const phone=req.body.phonenumber;
console.log('2.1')
Info.create({
    name:name,
    email:email,
    phoneNumber:phone
})
.then((result)=>res.status(200).json((result)))
.catch(err=>console.log(err));
}

exports.editAppointment= async(req,res,next)=>{
   const id=req.params.Nid;
    const name1=req.body.name;
    const email1=req.body.email;
    const phone1=req.body.phonenumber; 
   await Info.findByPk(id)   
    .then((data)=>
    {
         data.name=name1;
        data.email=email1;
        data.phoneNumber=phone1;
        return data.save();
    })
    .then(result=>
        {
          res.status(200).json((result));
        })
    .catch(err=>console.log(err));
    }

 exports.getAppointment= async(req,res,next)  =>{
  console.log('2.5')
  try{
   let result= await Info.findAll();
    res.status(200).json(result);
    //res.sendFile(path.join(__dirname, '../','appointusingcrud.html'));
  
   }
    catch(err)
         {
          console.log(err);
         }
            }
   

  exports.deleteAppointment= (req,res,next)=>{
    const idd=req.params.Nid;                        //  Info.findByPk(idd)
            Info.destroy({ where: { id: idd} })   //.then(product=> 
                                                  //  {return product.destroy()})
                                                  //.then(result=>
                                                  //{console.log("deleted");
            .then((result)=>res.status(200).send('deleted'))
             .catch(err=>console.log(err));
             }