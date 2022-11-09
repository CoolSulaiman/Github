
let cartIcon=document.querySelector("#cart-icon");

let cart=document.querySelector('.cart');
let closeCart=document.querySelector('#close');


cartIcon.onclick = () => {
    cart.classList.add("active");

};

closeCart.onclick =()=>{
    cart.classList.remove("active");
};

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

// remove item from cart


function ready(){
    const removeCartButtons=document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons);
    
    for(var i=0;i<removeCartButtons.length;i++){
        button=removeCartButtons[i];
        button.addEventListener('click',removeFromCart)
    }

    function removeFromCart(event){
        var buttonClicked=event.target;
        buttonClicked.parentElement.parentElement.remove();
    }
}

/* //add to caart */

const addToCart=document.getElementsByClassName("add-cart")

for(let i=0;i<addToCart.length;i++){

    let button =addToCart[i];
    button.addEventListener("click", addCartClicked)
}

function addCartClicked(event,id){

    var button=event.target;
    var shopProduct=button.parentElement;

    var title=shopProduct.getElementsByClassName("product-title")[0].innerText;
    var price=shopProduct.getElementsByClassName("price")[0].innerText;
    var productImg=shopProduct.getElementsByClassName("img")[0].src;
    addProductToCart(title,price,productImg,id)
    updatetotal()
}

function addProductToCart(title,price,productImg,id){
    var cartShopBox=document.createElement("div")
    cartShopBox.classList.add("cart-box")

    var cartItems=document.getElementsByClassName("cart-content")[0];
    // let cartItemsBox=document.getElementsByClassName("detail-box")[0]
    var cartItemsNames=document.getElementsByClassName("cart-product-title");

    for(var i=0;i<cartItemsNames.length;i++){
        if(cartItemsNames[i].innerText == title)
        {
        alert("You have already added this item to cart")
        return
        }
    }

    var cartBoxContent =`  
    <div class="detail-box">
    <img src="${productImg}" alt="" class="cart-img">

        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity">
        <i class='bx bxs-trash-alt cart-remove'></i>

    </div>
            `
            postProductToCart(id);
        cartShopBox.innerHTML = cartBoxContent;
        // cartItems.innerHTML = cartItems.innerHTML+cartShopBox Set-Location -Path C:\

        cartItems.append(cartShopBox)
        cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click",removeFromCartt)
        cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change",quantityChanged)

}

function removeFromCartt(event){
    var buttonClicked=event.target;
    buttonClicked.parentElement.parentElement.remove();
}
// update total

function updatetotal() { 
    var cartContent=document.getElementsByClassName('cart-content')[0];
    var cartBoxes=document.getElementsByClassName("cart-box");
    var total=0;

    for(let i=0; i<cartBoxes.length;i++){
        var cartBox=cartBoxes[i];
        let priceElement=cartBox.getElementsByClassName("cart-price")[0]
        let quantityElement=cartBox.getElementsByClassName("cart-quantity")[0]
        let price=parseFloat(priceElement.innerText.replace("$",""))
        let quantity=quantityElement.value;
        total=total +(price*quantity)

        document.getElementsByClassName("total-price")[0].innerText="$" + total;
          
    }
}

// quantity changes

var quantityInput=document.getElementsByClassName("cart-quantity")
for(let i=0;i<quantityInput.length;i++){
    var input=quantityInput[i];
    input.addEventListener("change",quantityChanged)
}

function quantityChanged(event){
let input=event.target;
if(isNaN(input.value) || input.value <=0){
    input.value = 1;
}
updatetotal();

}

/// 



// function addItemToCart(title, price, imageSrc) {
//     var cartRow = document.createElement('div')
//     cartRow.classList.add('cart-row')
//     var cartItems = document.getElementsByClassName('cart-items')[0]
//     var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
//     for (var i = 0; i < cartItemNames.length; i++) {
//         if (cartItemNames[i].innerText == title) {
//             alert('This item is already added to the cart')
//             return
//         }
//     }
//     var cartRowContents = `
//         <div class="cart-item cart-column">
//             <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
//             <span class="cart-item-title">${title}</span>
//         </div>
//         <span class="cart-price cart-column">${price}</span>
//         <div class="cart-quantity cart-column">
//             <input class="cart-quantity-input" type="number" value="1">
//             <button class="btn btn-danger" type="button">REMOVE</button>
//         </div>`
//     cartRow.innerHTML = cartRowContents
//     cartItems.append(cartRow)
//     cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
//     cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
// }


// -----------axios------------
const parent= document.getElementById('shop-content')

window.addEventListener('DOMContentLoaded',(()=>{
    
    let page=1;
    getProducts(page)

    }))
    fetchCartProducts();


            function getProducts(page){
    
        axios.get(`http://localhost:3000/products/?page=${page}`).then((res) => {
            console.log(res)
         parent.innerHTML=null;
            res.data.products.forEach(data=>{
                showProductsOnScreen(data);
                showPagination(res.data.data);

                console.log("GOT  FROM  DATABASE");
            })
           

        })
    }


    function showPagination({currentPage,hasNextPage,hasPreviousPage,nextPage,previousPage,lastPage}){

        pagination.innerHTML ='';
        
        if(hasPreviousPage){
            const button1 = document.createElement('button');

            button1.innerHTML = previousPage ;
            
            button1.addEventListener('click' , ()=>getProducts(previousPage))
            pagination.appendChild(button1)
        }
        
        const button2 = document.createElement('button');
        button2.classList.add('active')
        button2.innerHTML = currentPage ;
        button2.addEventListener('click' , ()=>getProducts(currentPage))
        pagination.appendChild(button2)
    
        if(hasNextPage){
            const button3 = document.createElement('button');
            button3.innerHTML = nextPage ;
            button3.addEventListener('click' , ()=>getProducts(nextPage))
            pagination.appendChild(button3)
        }
    
    }
    
    function showProductsOnScreen(data){
            
            let child=`<div id=${data.id} class="product-box">
            <img src=${data.imageUrl} alt="" class="product-img img">
            <div class="product-title">${data.title}</div>
            <span class="price">${data.price}</span>
            <i id="btn" class='bx bx-shopping-bag add-cart' onclick= addCartClicked(event,"${data.id}")> </i>
            
        </div>`
        
        parent.innerHTML += child;
    }


    function postProductToCart(prodId){

        axios.post("http://localhost:3000/cart",{prodId:prodId})
        .then((data)=>{
            console.log("damn lover")
            console.log(data)
            showNotification("Succsffully added to cart",)
        })
        .catch(err=>{
            console.log(err)
        })
    }


    function fetchCartProducts(){
        axios.get('http://localhost:3000/cart')
        
        .then((res)=>{
                console.log(res)
         res.data.products.forEach(data => {
            let total=0;

            const price = data.price;
            total = total + +price ;

                const parent=document.getElementsByClassName('cart-content')[0]; 
                var cartShopBox=document.createElement("div")
                cartShopBox.classList.add("cart-box")
                
                cartShopBox.innerHTML=`
                <div id="cat" class="detail-box">
                <img src="${data.imageUrl}" alt="" class="cart-img">
                    <div class="cart-product-title">${data.title}</div>
                    <div class="cart-price">${data.price}</div>
                    <input type="number" value="1" class="cart-quantity">
                    <i class='bx bxs-trash-alt cart-remove' onclick='deleteCartItem(event, ${data.id})'></i>

                </div>`                                    
           
            // parent.innerHTML=parent.innerHTML+child;
            parent.append(cartShopBox)
            cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change",quantityChanged)

            updatetotal()

            });

        })
    }
    function deleteCartItem(e, prodId){
        e.preventDefault();
        axios.post('http://localhost:3000/cart-delete-item', {prodId: prodId})
            .then(() => {
                 removeFromCar(prodId)

            })
    }
    function removeFromCar(event){
        document.getElementById('cat').remove()
        showNotification('Succesfuly removed product')

    }

    function showNotification(message, iserror){
        const container = document.getElementById('container');
        const notification = document.createElement('div');
        notification.style.backgroundColor = iserror ? 'red' : 'green';
        notification.classList.add('notification');
        notification.innerHTML = `<h4>${message}<h4>`;
        container.appendChild(notification);
        setTimeout(()=>{
            notification.remove();
        },2500)
    }




    document.addEventListener('click',(e)=>{
    
        
        if (e.target.className=='cart-btn-bottom' || e.target.className=='cart-bottom' || e.target.className=='cart-holder'){
            getCartItems()
        }
        if (e.target.className=='cancel'){
            document.querySelector('#cart').style = "display:none;"
        }
        if (e.target.className=='btn-buy'){
            // if (parseInt(document.querySelector('.cart-number').innerText) === 0){
            //     alert('You have Nothing in Cart , Add some products to purchase !');
            //     return;
            // }
            axios.post('http://localhost:3000/create-order')
            .then(response=>{
                // getCartItems();
                console.log(response);
            })
            .catch(err=>{
                console.log(err);
            })
            alert('Thank you! forshopping with us')
        }
    })
