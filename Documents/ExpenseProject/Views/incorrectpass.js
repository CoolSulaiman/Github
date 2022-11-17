const forgetPass = document.getElementById('forgetPassword-form');
const emailInput = document.querySelector('#email');
  
clickme.addEventListener('submit' , sendEmail);

async function sendEmail(e){
    e.preventDefault();
    
    const UserObj = {
        email: emailInput.value
    }
    console.log(userDetails);


    axios.post('http://localhost:8000/password/forgotpassword' , UserObj)
    .then(res=>{

    })
    .catch(err=>{
        console.log(err)
    })

}