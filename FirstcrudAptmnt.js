const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
myForm.addEventListener('submit', onSubmit);


window.addEventListener("DOMContentLoaded",(()=>{
    axios.get("https://crudcrud.com/api/b25987c421a6431fa5ba4fefeffd055d/Appointmentdata")

    .then((res)=>{
        console.log(res.data)
        showNewUserOnScreen111(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
}))


function showNewUserOnScreen111(user){
 var parentNode=document.getElementById('users');
    for( let i=0;i<user.length;i++ )
    {
    
    const childHTML=`<li id=${user[i].email}> ${user[i].email} - ${user[i].name}
                            <button onclick=deleteUser1('${user[i]._id}')> Delete button1</button>                           
                            <button onclick=editUser('${user[i].email}','${user[i].name}')> edit button </button>
                            </li>`
                            parentNode.innerHTML= parentNode.innerHTML+childHTML;
    }
                             }
function onSubmit(e) {

    e.preventDefault();
    const obj={
        name: nameInput.value,
        email:emailInput.value


    }
axios.post("https://crudcrud.com/api/b25987c421a6431fa5ba4fefeffd055d/Appointmentdata",obj)
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
                            <button onclick=deleteUser('${user.email}','${user._id}')> Delete button</button>
                            <button onclick=editUser( '${user.email}','${user.name}' )> edit button </button></li>`
                            parentNode.innerHTML= parentNode.innerHTML+childHTML;
                             }


    function deleteUser1(dataID){
        console.log(dataID);
        axios.delete(`https://crudcrud.com/api/b25987c421a6431fa5ba4fefeffd055d/Appointmentdata/${dataID}`)
  
        .then((res)=>{
            console.log(res);
        })
        .catch(err=>console.log(err))
     }


function deleteUser(emailId,data)
{
    axios.delete(`https://crudcrud.com/api/b25987c421a6431fa5ba4fefeffd055d/Appointmentdata/${data}`)
  
    .then((res)=>{
        console.log("data deleted")
    })
    .catch(err=>console.log(err))

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

