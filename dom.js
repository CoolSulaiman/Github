
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
myForm.addEventListener('submit', onSubmit);


function onSubmit(e) {

    e.preventDefault();
    const obj={
        name: nameInput.value,
        email:emailInput.value
    }

    localStorage.setItem(email.value, JSON.stringify(obj))
    const localStorageObj = localStorage;

    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< 1; i++){

        const key = localstoragekeys[i];
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj);
    }
}




function showNewUserOnScreen(user){
 
   document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    
    if(localStorage.getItem(user.email) !== null){
        removeUserFromScreen(user.email)
    }

    console.log(localStorage.getItem(user.emailId))
    const parentNode = document.getElementById('users');
    const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
                            <button onclick=deleteUser('${user.email}')> Delete User </button>
                            <button onclick=editUserDetails('${user.email}','${user.name}','${user.phonenumber}')>Edit User 
                            </button> </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}


function editUserDetails(emailId, name ){

    document.getElementById('email').value = emailId;
    document.getElementById('name').value = name;

    deleteUser(emailId);
 }

function deleteUser(emailId){
    console.log(emailId);
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);

}



function removeUserFromScreen(emailId){
    const parentNode = document.getElementById('users');
    const childNodeToBeDeleted = document.getElementById(emailId);

    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted);
    }

}

