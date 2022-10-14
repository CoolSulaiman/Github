const path=require('path');
const rootdir= require('../util/path')

exports.getAddproduct=(req,res,next)=>{ 
    console.log("Get request --Adding product");
    res.sendFile(path.join(rootdir,'../','views','addproduct.html'))
    
}
exports.postController=(req,res,next)=>{
    console.log("Post req. from admin")
   res.redirect('/shop');
}


