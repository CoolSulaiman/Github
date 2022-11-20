// const path =require('path')
// const User=require('../models/user')
// const express = require('express')
// const rootDir = require('../util/path');


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput =document.querySelector('#phone')
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
myForm.addEventListener('submit', onSubmit);


axios.get("http://localhost:2000/users")
.then((res)=>{
const data=res.data.response;
showNewUserOnScreen111(data);
})
.catch((err)=>{
    console.log(err);
})


function showNewUserOnScreen111(user){
    var parentNode=document.getElementById('users');
    for( let i=0;i<user.length;i++)
    {
    const childHTML=`<li id=${user[i].email}> ${user[i].email} - ${user[i].name} -${user[i].PhoneNumber}
                            <button onclick=deleteUser('${user[i].email}','${user[i].id}')> Delete button</button>
                            <button onclick=editUser( '${user[i].email}','${user[i].name}','${user[i].PhoneNumber}' )> edit button </button>`
                            parentNode.innerHTML= parentNode.innerHTML+childHTML;
    }
                             }

function onSubmit(e) {

    e.preventDefault();
    const obj={
        name: nameInput.value,
        email:emailInput.value,
        phone:phoneInput.value

    }
axios.post("http://localhost:2000/addUsers", obj)
    .then((response) => { 
      showNewUserOnScreen(response.data.NewData);
    })
    .catch((err) => {
      document.body.innerHTML =
        document.body.innerHTML + "<h4>something went wrong </h4>";
      console.log(err);
    });

}
function removeUserFromScreen(emailId)
{
    const parentNode=document.getElementById('users');
    const childNodeToBeDeleted=document.getElementById(emailId);

    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted);
    }
}
function showNewUserOnScreen(user){
    var parentNode=document.getElementById('users');
    const childHTML=`<li id=${user.email}> ${user.email} - ${user.name} -${user.PhoneNumber}
                            <button onclick=deleteUser('${user.email}','${user.id}')> Delete button</button>
                            <button onclick=editUser( '${user.email}','${user.name}','${user.PhoneNumber}' )> edit button </button></li>`
                            parentNode.innerHTML= parentNode.innerHTML+childHTML;
                             }

 
// function editUser(email,name){

//     document.getElementById('email').value=email
//     document.getElementById('name').value=name
// }

function deleteUser(emailId,data)
{
    console.log(emailId,data)
    axios.delete(`http://localhost:2000/deleteUser/${data}`)

    .then((res)=>{
        console.log("data deleted")
    })
    .catch(err=>console.log(err))

   removeUserFromScreen(emailId)
}

