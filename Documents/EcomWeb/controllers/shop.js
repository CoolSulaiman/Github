const Product = require('../models/product');
const Cart = require('../models/cart');
const CartItem = require('../models/cart-item');



let limit_items = 2;

exports.getProducts = (req, res, next) => {
  let page = req.query.page || 1;
  let totalItems;

  Product.count()
    .then((totalProducts) => {
      totalItems = totalProducts;
      return Product.findAll({
        offset: (page - 1) * limit_items,
        limit: limit_items,
      });
    })
    .then((products) => {
      res.status(200).json({
        products,
        success: true,
        data: {
          currentPage: page,
          hasNextPage: totalItems > page * limit_items,
          hasPreviousPage: page > 1,
          nextPage: +page + 1,
          previousPage: +page - 1,
          lastPage: Math.ceil(totalItems / limit_items),
        },
      });
      // res.render("shop/product-list", {
      //   prods: products,
      //   pageTitle: "All Products",
      //   path: "/products",
      // });
    })
    .catch((err) => {
      res
        .status(500)
        .json({  message: "Error getting products " });
    });
};

// exports.getProducts = (req, res, next) => {
//   Product.findAll()
//     .then(products => {
//     res.status(200).json({products})

//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // Product.findAll({ where: { id: prodId } })
  //   .then(products => {
  //     res.render('shop/product-detail', {
  //       product: products[0],
  //       pageTitle: products[0].title,
  //       path: '/products'
  //     });
  //   })
  //   .catch(err => console.log(err));
  Product.findByPk(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then(cart => {
      return cart
        .getProducts()
        .then(products => {
            res.status(200).json({products})
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};

exports.postCart = (req, res, next) => {
const prodId=req.body.prodId
  if(!prodId){
    res.status(400).json({error:true , message: "product id is missing"})
  }

  let fetchedCart;
  let newQuantity = 1;
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts({ where: { id: prodId } });
    })
    .then(products => {
      let product=products[0];

      if (product) {
        console.log("hello")
        const oldQuantity = product.cartitems.quantity;
        newQuantity = oldQuantity + 1;
        return product;
      }
      else{
      return Product.findByPk(prodId);
      }
    })
    .then(product => {
      return fetchedCart.addProduct(product, {
        through: { quantity: newQuantity }
      });
    })
    .then(() => {
      res.status(200).json({sucess:true, message:"Successfully added to cart"})
    })
    .catch(err => 
      res.status(500).json({sucess:false, message:"Error"}));
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.prodId;
  console.log(prodId)
  req.user.getCart()
  .then(product=>{
   return product.getProducts({where : {id:prodId}})
  })
  .catch(err=>{console.log(err)})
  .then(res=>{
   const product=res[0];
   return product.cartitems.destroy()
  })
  .catch(err=>{console.log(err)})
  .then(result=>{
    res.redirect('/cart')
   })
   .catch(err=>{console.log(err)})

};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};



exports.postOrder = (req, res, next) => {
  let fetchedCart ;
  req.user
    .getCart()
    .then((cart) => {
      fetchedCart = cart ;
      return cart.getProducts();
    })
    .then((products) => {
      return req.user.createOrder().
      then(order=>{
        console.log(order)
        order.addProducts(products.map(product => {
          product.orderItem = {quantity : product.cartitems.quantity}
          return product
        }))
      })
      .catch(err=>console.log(err))
    })
    .then(result=>{
      fetchedCart.setProducts(null);
      res.status(200).json({message:'successfully posted orders'})
    })
    .catch((err) => {
      console.log(err);
    });
};