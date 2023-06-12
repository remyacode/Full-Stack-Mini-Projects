const btn=document.querySelector('#my-form .btn');

const myForm=document.querySelector('my-form');
const amtInput=document.querySelector('#amt');
const desInput=document.querySelector('#des');
const catInput=document.querySelector('#cat');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

btn.addEventListener('click',onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(amtInput.value===''||desInput.value===''||catInput.value===''){
        //alert('Please enter fields');
        msg.classList.add('error');
        msg.innerHTML='Please enter all fields';
        setTimeout(()=>msg.remove(),3000);
    }
    else{
        const li=document.createElement('li');
        li.id='listitem';
        
        ///////////delete
        
        const delBtn=document.createElement('button');
        
        //add classes to delete button
        delBtn.className='btn btn-danger btn-sm float-right delete';
        delBtn.id='del';
        //append text node delete
        delBtn.appendChild(document.createTextNode('Delete Expense'));

  //////////////EDIT//////////////

        const edBtn=document.createElement('button');
        
  //add classes to edit button
        edBtn.className='btn btn-danger btn-sm float-right edit';
        edBtn.id='ed';
//append text node delete
        edBtn.appendChild(document.createTextNode('Edit Expense'));

  ///////////////////////////////


        li.appendChild(document.createTextNode(`${amtInput.value}:${desInput.value}:${catInput.value}`));


      //append button to li
        li.appendChild(delBtn);
        li.appendChild(edBtn);

        /////LOCAL STORAGE AS OBJECT

        const ob={
            "Amount":amtInput.value,
            "Description":desInput.value,
            "Category":catInput.value
        };

        var obs=JSON.stringify(ob);
        localStorage.setItem(amtInput.value,obs);
        userList.appendChild(li);
        //console.log(obs);

        //getting deserialised
     
        let obd=JSON.parse(localStorage.getItem(amtInput.value));
        //console.log(obd);
        delBtn.addEventListener('click',removeItems);
        edBtn.addEventListener('click',edititems);
        ////
        function removeItems(e){
            localStorage.removeItem(ob.Amount);
            var itemList=document.getElementById('listitem').parentNode;
            ////////
            if(e.target.classList.contains('delete') || e.target.classList.contains('edit')){
        //if(confirm('Are you Sure?')){
            var li=e.target.parentElement;
            
            //localStorage.removeItem(ob.Email);
            itemList.removeChild(li);
            
        //}
    }

            }

        function edititems(e){
                removeItems(e);
                amtInput.value=ob.Amount;
                desInput.value=ob.Description;
                catInput.value=ob.Category;
            }

        }
    
        amtInput.value='';
        desInput.value='';
        catInput.value='';
    }

