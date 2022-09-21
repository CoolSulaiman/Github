const myForm = document.querySelector('#my-form');
const amountInput = document.querySelector('#amount');
const descriptionInput = document.querySelector('#des');
const categoryInput = document.querySelector('#cat5');


clickme.addEventListener('click', addExpense);


function addExpense(e){
    e.preventDefault();
    const obj={
        amount: amountInput.value,
        des: descriptionInput.value,
        cat5:categoryInput.value

    }

    localStorage.setItem(amount.value,JSON.stringify(obj));
    var localStorageObj=localStorage;
    var localstoragekeys= Object.keys(localStorage);
    console.log(localstoragekeys);
    document.getElementById('users').innerHTML='';

    for(let i=0;i<localstoragekeys.length;i++){

       
         const key =localstoragekeys[i];
        const userDetailsString=localStorageObj[key];
        const userDetailsObj=JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj);
        
    }
}
        function showNewUserOnScreen(user){

            var parentNode=document.getElementById('users');
            const childHTML=`<li id=${user.amount + user.des} > ${user.amount} - ${user.des}- ${user.cat5}
                                <button onclick=deletexpense('${user.amount}')> Delete Expense</button>
                                <button onclick=edit('${user.amount}','${user.des}','${user.cat5}')> Edit Expense </button>`
            parentNode.innerHTML= parentNode.innerHTML+childHTML;
        }
    

    
    function edit(amountID, descr, categ){
        document.getElementById('amount').value = amountID;
        document.getElementById('des').value = descr;
        document.getElementById('cat5').value=categ;
    
        deletexpense(amountID); 
    }

    function deletexpense(amountID){
            localStorage.removeItem(amountID)
            removeUserFromScreen(amountID)
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

   
    var localStorageObj1=localStorage;
    var localstoragekeys1= Object.keys(localStorage);
    
    for(let i=0;i<localstoragekeys1.length;i++){

        document.getElementById("users").innerHTML= document.getElementById("users").innerHTML+
        localStorage.getItem(localstoragekeys1[i]);

    }
