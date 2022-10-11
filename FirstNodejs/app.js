const http =require('http');
const express= require('express')
const app=express();
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))

app.use('/',(req,res,next)=>{
    console.log("In the midlle  waare")
    next()// ALLows the req to continue to next middlewaare in line
})
app.use('/addproduct',(req,res,next)=>{
    console.log("Adding product");
    res.send('<form action=/product method="POST"><label for="html">Product : </label><input type=text name="title"><label for="html">Size : </label> <input type=text name="size"><button type=submit>Add product</button></form>')
    

})

app.use('/product',(req,res,next)=>{
    console.log(req.body);
   res.redirect('/');
})

 
app.use((req,res,next)=>{
    console.log("In another midlle  waare")
    res.send('<h1> Welcome express.js</h1>')
})
app.listen(4000);


