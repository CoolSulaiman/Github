
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

var bg=document.querySelector('.container');
bg.style.background="#ccc";


function onSubmit(e) {

 e.preventDefault();
// local storage 
 let myObj = {

    name : nameInput.value,
    email : emailInput.value
};


let myob_ser=JSON.stringify(myObj);
localStorage.setItem(email.value,myob_ser);




Object.keys(localStorage).forEach((key) => {

    stringifiedDetailsOfPeople = localStorage.getItem(key);
       detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
       
       const li = document.createElement('li');
       console.log(detailsOfPeople);
       li.append(detailsOfPeople.name +detailsOfPeople.email);
       userList.append(li);
   
    
   
       const Editbtn=document.createElement('button');
       Editbtn.appendChild(document.createTextNode("Edit"));
        li.appendChild(Editbtn);
   
      const deletebtn=document.createElement('button');
      deletebtn.appendChild(document.createTextNode("Delete"));
      deletebtn.className='delete';
       li.appendChild(deletebtn);
   
   
       userList.addEventListener('click',removeitem);
   
       nameInput.value = '';
       emailInput.value = '';
       });

       
  function removeitem(e){

    if(e.target.classList.contains('delete'))
    {
        if(confirm('are u sure'))
        {
            var d=e.target.parentElement;
            userList.removeChild(d);
            
            localStorage.removeItem(email.value);


        }
    }

}



}





    





