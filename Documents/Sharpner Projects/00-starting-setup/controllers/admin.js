const { reset } = require('nodemon');
const { deleteproductbyID } = require('../models/product');
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({
    title:title,
    price:price,
    imageUrl:imageUrl,
    description:description
  })
  .then(result=>{
    console.log(result)
    res.redirect('/admin/products')
  })
  .catch(err=>{
    console.log(err)
  })
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findByPk(prodId)
  .then((product)=>{
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  })
  .catch(()=>{
    console.log(err)
  })
}

    //  prouct => {
    // if (!product) {
    //   return res.redirect('/');
    // }
 

exports.postDeleteProduct =(req,res,next)=>{
  const prodId=req.body.productId;
  
  Product.findByPk(prodId)
  .then(product=>{
    return product.destroy();
  })
  .then(result=>{
    console.log("DELETED")
    res.redirect('/admin/products')
  })
  .catch(err=>{
    console.log(err)
  })

}

exports.postEditProduct =(req,res,next) =>{
const prodId=req.body.productId;
const updatedtitle = req.body.title;   
const updatedimageUrl = req.body.imageUrl;
const updatedprice = req.body.price;
const updatedDescription = req.body.description;
const updatedProduct=new Product(prodId,updatedtitle,updatedimageUrl,updatedDescription,updatedprice)
Product.findByPk(prodId)
.then(product=>{
  product.title=updatedtitle;
  product.price=updatedprice;
  product.imageUrl=updatedimageUrl
  product.description=updatedDescription;
  return product.save();
})
.then(result=>{
  console.log("UPDATED PRODUCT")
  res.redirect('/admin/products')

})
.catch(err=>{
  console.log(err)
})

}

exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then(product=>{
    res.render('admin/products', {
      prods: product,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch(err=>{
    console.log(err)
  })

};
