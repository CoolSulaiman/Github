
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
 e.preventDefault();


let myObj = {

    name : nameInput.value,
    email : emailInput.value
};

let myob_ser=JSON.stringify(myObj);
localStorage.setItem("myobj",myob_ser);
 console.log(myob_ser);
}