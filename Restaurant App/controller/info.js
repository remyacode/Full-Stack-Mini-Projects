const Info=require('../model/info');
const path=require('path')

exports.bookA= (req,res,next)=>{
const amt=req.body.amt;
const des=req.body.des;
const cat=req.body.cat;
console.log('2.1')
Info.create({
    amt:amt,
    des:des,
    cat:cat
})
.then((result)=>res.status(200).json((result)))
.catch(err=>console.log(err));
}

exports.editA= async(req,res,next)=>{
   const id=req.params.Nid;
    const amt1=req.body.amt;
    const des1=req.body.des;
    const cat1=req.body.cat; 
   await Info.findByPk(id)   
    .then((data)=>
    {
        data.amt=amt1;
        data.des=des1;
        data.cat=cat1;
        return data.save();
    })
    .then(result=>
        {
          res.status(200).json((result));
        })
    .catch(err=>console.log(err));
    }

 exports.getA= async(req,res,next)  =>{
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
   

  exports.deleteA= (req,res,next)=>{
    const idd=req.params.Nid;                        //  Info.findByPk(idd)
            Info.destroy({ where: { id: idd} })   //.then(product=> 
                                                  //  {return product.destroy()})
                                                  //.then(result=>
                                                  //{console.log("deleted");
            .then((result)=>res.status(200).send('deleted'))
             .catch(err=>console.log(err));
             }