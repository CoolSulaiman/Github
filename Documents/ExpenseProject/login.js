const form=document.getElementById('login-form')

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');




clickme.addEventListener('click',login)

function login(e){
    e.preventDefault();

    const obj={
        email:emailInput.value,
        password:passwordInput.value
    }
    

    axios.post('http://localhost:8000/user/login',obj)

    .then(res=>{
        console.log(res.data)
            console.log("login success")
            if(res.status === 200){
                alert("User login sucessful")
            }else{
                console.log('error')
            }
    })
    .catch(err=>{

    })
}