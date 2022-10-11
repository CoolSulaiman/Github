const http =require('http');
const express= require('express')
const app=express();

app.use((req,res,next)=>{
    console.log("In the midlle  waare")
    next()// ALLows the req to continue to next middlewaare in line
})
app.use((req,res,next)=>{
    console.log("In another midlle  waare")
    res.send('<h1> Welcome expressJS</h1>')
})

app.listen(4000);


