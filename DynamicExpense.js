const myForm = document.querySelector('#my-form');
const amountInput = document.querySelector('#amount');
const descriptionInput = document.querySelector('#des');
const categoryInput = document.querySelector('#Category');

console.log(categoryInput);
console.log(descriptionInput);

https://crudcrud.com/api/0c6ce708eb954a27bb427d7c226357f9/expenses

clickme.addEventListener('click', addExpense);


window.addEventListener('DOMContentLoaded',(()=>{

axios.get('https://crudcrud.com/api/0c6ce708eb954a27bb427d7c226357f9/expenses')

.then((res)=>{
        console.log("GOT  FROM  DATABASE");
        showNewUserOnScreen111(res.data);
})
}))

function showNewUserOnScreen111(user){
    for(let i=0;i<user.length;i++)
    {
    var parentNode=document.getElementById('users');
    const childHTML=`<li id=${user[i].amount} > ${user[i].amount} - ${user[i].des}- ${user[i].Category}
                        <button onclick=deletexpense11('${user[i].amount}','${user[i]._id}')> Delete Expense</button>
                        <button onclick=edit('${user[i].amount}','${user[i].des}','${user[i].Category}','${user[i]._id}')> Edit Expense </button>`
    parentNode.innerHTML= parentNode.innerHTML+childHTML;
}
}

function addExpense(e){
    e.preventDefault();
    const obj={
        amount: amountInput.value,
        des: descriptionInput.value,
        Category:categoryInput.value

    }

    axios.post("https://crudcrud.com/api/0c6ce708eb954a27bb427d7c226357f9/expenses",obj)

    .then((res)=>{
        console.log('ADDED')
            showNewUserOnScreen(res.data);
    })
    .catch((err)=>{
        console.log(err)
    })
   
}


        function showNewUserOnScreen(user){

            var parentNode=document.getElementById('users');
            const childHTML=`<li id=${user.amount} > ${user.amount} - ${user.des}- ${user.Category}
                                <button onclick=deletexpense('${user.amount}','${user._id}')> Delete Expense</button>
                                <button onclick=edit('${user.amount}','${user.des}','${user.Category}','${user._id}')> Edit Expense </button>`
            parentNode.innerHTML= parentNode.innerHTML+childHTML;
        }


    function edit(amountID, descr, categ,ID){
        document.getElementById('amount').value = amountID;
        document.getElementById('des').value = descr;
        document.getElementById('Category').value=categ;

        deletexpense(amountID,ID); 
    }

    function deletexpense11(amount,dataID){

        axios.delete(`https://crudcrud.com/api/0c6ce708eb954a27bb427d7c226357f9/expenses/${dataID}`)
        .then((res)=>{
            console.log(res.data+"data deleted")
        })
        .catch((error)=>{
            console.log(error)
        })
removeUserFromScreen(amount);
}


    function deletexpense(amount,dataID){
        axios.delete(`https://crudcrud.com/api/0c6ce708eb954a27bb427d7c226357f9/expenses/${dataID}`)
        .then((res)=>{
            console.log(res.data+"data deleted")
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

