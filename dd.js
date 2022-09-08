
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
userList.addEventListener('click',removeitem);

var bg=document.querySelector('.container');
bg.style.background="#ccc";


function onSubmit(e) {
 e.preventDefault();

 let myObj = {
    name :nameInput.value,
    email : emailInput.value
};


let myob_ser=JSON.stringify(myObj);
localStorage.setItem(email.value,myob_ser);

if(nameInput.value === '' || emailInput.value === '') {
   
    alert("Pl. Enter");
    
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    userList.appendChild(li);

     
    const Editbtn=document.createElement('button');
    Editbtn.appendChild(document.createTextNode("Edit"));
     li.appendChild(Editbtn);

   const deletebtn=document.createElement('button');
   deletebtn.appendChild(document.createTextNode("Delete"));
   deletebtn.className='delete';
    li.appendChild(deletebtn);

    nameInput.value = '';
    emailInput.value = '';
       }
    }

    function removeitem(e){
        if(e.target.classList.contains('delete'))
        {
            if(confirm('are u sure'))
            {
                var d=e.target.parentElement;
                userList.removeChild(d); 
                localStorage.removeItem();
            }
        }
    
    }



    function editUserDetails(emailId, name ){

        document.getElementById('email').value = emailId;
        document.getElementById('username').value = name;
    
        deleteUser(emailId);
     }
    





