const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
myForm.addEventListener('submit', onSubmit);




window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/3461f1424094498c9447862a3f01f770/appointmentData")
.then((res)=>{

    const rest=res;
    console.log(rest);
    
    showNewUserOnScreen111(rest.data);
})
.catch((err)=>{
    console.log(err);
})

})




function showNewUserOnScreen111(user){
    var parentNode=document.getElementById('users');
    for( let i=0;i<user.length;i++)
    {
    const childHTML=`<li id=${user[i].email}> ${user[i].email} - ${user[i].name}
                            <button onclick=deleteUser('${user[i].email}')> Delete button</button>
                            <button onclick=editUser( '${user[i].email}','${user[i].name}' )> edit button </button>`
                            parentNode.innerHTML= parentNode.innerHTML+childHTML;
    }
                             }

function onSubmit(e) {

    e.preventDefault();
    const obj={
        name: nameInput.value,
        email:emailInput.value

    }
axios.post("https://crudcrud.com/api/3461f1424094498c9447862a3f01f770/appointmentData",obj)
.then((response)=>{
    console.log(response);
    const respond=response;

    showNewUserOnScreen(respond.data);

})
.catch((err)=>{
    console.log(err);
})

    // localStorage.setItem(email.value,JSON.stringify(obj));
    // var localStorageObj=localStorage;
    //  var localstoragekeys= Object.keys(localStorage);

    // document.getElementById('users').innerHTML="";
    //  for(var i=0;i<localstoragekeys.length;i++)
    //  {
    //     const key =localstoragekeys[i];
    //     const userDetailsString=localStorageObj[key];
    //     const userDetailsObj=JSON.parse(userDetailsString);
    //     showNewUserOnScreen(userDetailsObj);
    //     console.log(userDetailsObj);
    //  }

}

function showNewUserOnScreen(user){
    var parentNode=document.getElementById('users');
    const childHTML=`<li id=${user.email}> ${user.email} - ${user.name}
                            <button onclick=deleteUser('${user.email}')> Delete button</button>
                            <button onclick=editUser( '${user.email}','${user.name}' )> edit button </button>`
                            parentNode.innerHTML= parentNode.innerHTML+childHTML;
                             }

function deleteUser(emailId)
{
   localStorage.removeItem(emailId);
   removeUserFromScreen(emailId)
}

function removeUserFromScreen(emailId)
{
    const parentNode=document.getElementById('users');
    const childNodeToBeDeleted=document.getElementById(emailId);
    
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted);
    }
}

