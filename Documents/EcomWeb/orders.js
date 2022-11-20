

const orderContent = document.getElementById('order-content');

window.addEventListener('DOMContentLoaded', getOrderDetails)

async function getOrderDetails(){
    try {
        let result = await axios.get('http://localhost:3000/orders') ;
        if(result.data.length <= 0){
            // orderContent.innerHTML = `No Orders Uptil now`

        }else{
            result.data.reverse().map(order=>{
                displayOrders(order);
                // console.log(order.products)
            })
            
        }
    } catch (error) {
        console.log(error)
    }
}

function displayOrders(order){
    let newOrderDetail = `<div id=${order.id} class="order-style" ><h3>Order Id - ${order.id}</h3></div>`

    orderContent.innerHTML += newOrderDetail ;

    orderedProducts(order);
}

function orderedProducts(order){
    let orderList = document.getElementById(`${order.id}`);
  
    order.products.map(product=>{
        let items = `<ul class="uli"><li class="lil"><img src="${product.imageUrl}" class="prod-img">Product : ${product.title}       Quantity= ${product.orderItem.quantity}</li></ul>`
        orderList.innerHTML += items
    })
}





// Users Table
// restaurant Table
// reviwing Table





// User and restaurant has many to maany RelationshipType

// Restaurant.hasMany(User)  through   rest details
// User.belongsToMany(resaataurant)   through   rest details




// restaurant and reviewing has one to many RelationshipType

// restaurant.hasMany(reviews)
// review.belongsTo(restaurant)

// User and reviewing has one to many  RelationshipType

// User.belongsTo(review)
// review.hasMany(users)



// restaurant

// --Name
// --id
// review id

// review
// --id
// --userid


// User

// id
// Name
// email
// review id


// restaaurant details

// --restaurant id
// --user id




