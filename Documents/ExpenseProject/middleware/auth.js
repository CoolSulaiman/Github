const jwt= require('jsonwebtoken')
const User= require('../Models/User')

exports.authentication= (req,res,next)=>{


const token=req.header('Authorisation')
console.log(token)
const user = (jwt.verify(token , 'itstoken' ))
console.log(user.userId)
    User.findByPk(user.userId).then(foundUser=>{
        req.user = foundUser ;
        next();
    })

}





