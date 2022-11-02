const myForm = document.querySelector('#my-form');
const amountInput = document.querySelector('#amount');
const descriptionInput = document.querySelector('#des');
const categoryInput = document.querySelector('#Category');

console.log(categoryInput);
console.log(descriptionInput);


clickme.addEventListener('click', addExpense);


window.addEventListener('DOMContentLoaded',(()=>{

axios.get("http://localhost:8000/users")

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
    const obj={
        Amount: amountInput.value,
        Description: descriptionInput.value,
        Category:categoryInput.value

    }

    axios.post("http://localhost:8000/addUser",obj)

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

        axios.delete(`http://localhost:8000/deleteUser/${dataID}`)
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

    document.addEventListener('DOMContentLoaded ',function xy(e){
        e.preventDefault();


    })