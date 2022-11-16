const myForm = document.querySelector('#my-form');
const amountInput = document.querySelector('#amount');
const descriptionInput = document.querySelector('#des');
const categoryInput = document.querySelector('#Category');
let token = localStorage.getItem('token')

clickme.addEventListener('click', addExpense);


window.addEventListener('DOMContentLoaded',(()=>{
    let token = localStorage.getItem('token');


    const usertype = localStorage.getItem('user');
    if(usertype == "true"){
       

        document.getElementById('area').classList.add('lightt')
        document.getElementById('my-form').classList.add('lightt')
    }


    
axios.get("http://localhost:8000/getuser" , {headers:{"Authorisation" : token}})

.then((res)=>{
        console.log("GOT  FROM  DATABASE");
        console.log(res.data.response)
        showNewUserOnScreen111(res.data.response);
})
}))


function showNewUserOnScreen111(user){
    for(let i=0;i<user.length;i++)
    {
    var parentNode=document.getElementById('users');
    const childHTML=`<li id=${user[i].Amount} > ${user[i].Amount} - ${user[i].Description}- ${user[i].Category}
                        <button onclick=deletexpense('${user[i].Amount}','${user[i].id}')> Delete Expense</button>
                        <button onclick=edit('${user[i].Amount}','${user[i].Description}','${user[i].Category}','${user[i].id}')> Edit Expense </button>`
    parentNode.innerHTML= parentNode.innerHTML+childHTML;
}
}

function addExpense(e){
    e.preventDefault();
    let token = localStorage.getItem('token')
    const obj={
        Amount: amountInput.value,
        Description: descriptionInput.value,
        Category:categoryInput.value

    }

    axios.post("http://localhost:8000/addUser",obj,{headers : {'Authorisation': token}})

    .then((res)=>{
        console.log('ADDED')

            showNewUserOnScreen(res.data.NewUser);
    })
    .catch((err)=>{
        console.log(err)
    })

}


        function showNewUserOnScreen(user){

            var parentNode=document.getElementById('users');
            const childHTML=`<li id=${user.Amount} > ${user.Amount} - ${user.Description}- ${user.Category}
                                <button onclick=deletexpense('${user.Amount}','${user.id}')> Delete Expense</button>
                                <button onclick=edit('${user.Amount}','${user.Description}','${user.Category}','${user.id}')> Edit Expense </button>`
            parentNode.innerHTML= parentNode.innerHTML+childHTML;
        }


    function edit(amountID, descr, categ,ID){

        document.getElementById('amount').value = amountID;
        document.getElementById('des').value = descr;
        document.getElementById('Category').value=categ;
        const obj={
            Amount:amountID,
            Description:descr,
            Category:categ
        }

        axios.post(`http://localhost:8000/editUser/${ID}`,obj)
        .then((response)=>{
            console.log(response.data +"data Updated")
        })
        .catch((error)=>{
            console.log(error)
        })
        removeUserFromScreen(amountID)
    }

    function deletexpense(amount,dataID){
        let token = localStorage.getItem('token')

        axios.delete(`http://localhost:8000/deleteUser/${dataID}`,{headers : {'Authorisation': token}})
        .then((response)=>{
            console.log(response.data+"data deleted")
        })
        .catch((error)=>{
            console.log(error)
        })
        removeUserFromScreen(amount);
}

    function removeUserFromScreen(amountID)
    {
        const parentNode=document.getElementById('users');
        const childNodeToBeDeleted=document.getElementById(amountID);
        console.log(childNodeToBeDeleted);
       parentNode.removeChild(childNodeToBeDeleted);

    }

    // document.addEventListener('DOMContentLoaded ',function xy(e){
    //     e.preventDefault();


    // })

    

    document.getElementById('premium').onclick = async function(e){
        e.preventDefault()

        console.log("oppppp")
        // let token = localStorage.getItem('token');

        var x =0;
        try {
            const response = await axios.post('http://localhost:8000/payment/premiummembership', x, {headers : {'Authorisation': token}})
            console.log("lolololol" , response.data)
            checkout(response.data);
        } catch (error) {
            console.log(error)
        }
    }
    
    function checkout(order){
    
        console.log(order);
        // console.log(order.order.id)
    
        var options = {
            "key" : order.key_id,
            "amount": order.order.amount,
            "currency": "INR",
            "order_id": order.order.id,
            "handler": function (response) {
    
                alert(`Payment successfull . Payment Id:- ${response.razorpay_payment_id} ` );
    
                // console.log(response.razorpay_payment_id);
                // console.log(response.razorpay_order_id);
                // console.log(response.razorpay_signature);
    
                axios.post('http://localhost:8000/payment/updatestatus', response,
                 {headers : {'Authorisation': token}})
                .then(res => {
                    console.log("done");
                    console.log(res);
                    alert("You are a premium user now");
                    premiumUser();
                })
                .catch(err => console.log(err));
            },
            // "prefill": {
            //     "name": "Test User",
            //     "email": "test.user@example.com",
            //     "contact": "7003442036"
            //   },
            // "theme": {
            //     "color": "#3399cc",
            // },
    
            // "callback_url": "expense.html"
        }
    
        var razorpay_1 = new Razorpay(options);
    
        razorpay_1.on('payment.failed', function(res) {
            alert(res.error.code);
            alert(res.error.description);
        });
    
        razorpay_1.open();
    }
    
    function premiumUser(){
        const usertype = localStorage.getItem('user');
        if(usertype == "true"){
           
    
            document.getElementById('area').classList.add('lightt')
            document.getElementById('my-form').classList.add('lightt')
        }
    }
    
document.getElementById('logout').onclick = function(e){
    e.preventDefault();
    localStorage.removeItem('token');
    window.location.href = 'file:///C:/Users/ADMIN/Documents/ExpenseProject/Views/login.html'
}