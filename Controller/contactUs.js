const path=require('path')

exports.contactUscontroller=(req,res,next)=>{
    
    res.sendFile(path.join(__dirname,'..','views','contactus.html'))
    
    }

    exports.contactPostsuccess=(req,res,next)=>{

        res.send('<h1> Form successfuly filled </h1>')
    }

