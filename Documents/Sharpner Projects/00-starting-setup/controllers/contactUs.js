const path = require('path');

exports.contact=(req,res,next)=>{

    res.sendFile(path.join(__dirname,'..','views','contactUs.html'))
}

exports.sucess= (req,res,next)=>{

    res.send('<h1> Form successfuly filled </h1>')
}
