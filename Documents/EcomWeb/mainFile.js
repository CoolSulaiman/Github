
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

function addCartClicked(event){

    var button=event.target;
    var shopProduct=button.parentElement;

    var title=shopProduct.getElementsByClassName("product-title")[0].innerText;
    var price=shopProduct.getElementsByClassName("price")[0].innerText;
    var productImg=shopProduct.getElementsByClassName("img")[0].src;
    addProductToCart(title,price,productImg)
    updatetotal()
}

function addProductToCart(title,price,productImg){
    var cartShopBox=document.createElement("div")
    cartShopBox.classList.add("cart-box")

    var cartItems=document.getElementsByClassName("cart-content")[0];
    // let cartItemsBox=document.getElementsByClassName("detail-box")[0]
    var cartItemsNames=document.getElementsByClassName("cart-product-title");
    console.log(cartItemsNames)

    for(var i=0;i<cartItemsNames.length;i++){
        if(cartItemsNames[i].innerText == title)
        {
        alert("You have already added this item to cart")
        return
        }
    }

    var cartBoxContent =`  
    <img src="${productImg}" alt="" class="cart-img">
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity">
        <i class='bx bxs-trash-alt cart-remove'></i>
    </div>
            `
    
        cartShopBox.innerHTML = cartBoxContent;
        console.log(cartShopBox);
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



function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}


// -----------axios------------

window.addEventListener('DOMContentLoaded',(()=>{

    axios.get('http://localhost:3000/products')
    
    .then((res)=>{
            console.log("GOT  FROM  DATABASE");

            res.forEach(element => {
                const parent= document.getElementById('shop-content')
                
                const child=`<div id=${element.id} class="product-box">
                <img src=${element.imgSrc} alt="" class="product img">
                <div class="product-title">${element.title}</div>
                <span class="price">${element.price}</span>
                <i id="btn" class='bx bx-shopping-bag add-cart'></i>
                
            </div>`
            
            parent.innerHTML+=child;
            });
            
    })
    }))