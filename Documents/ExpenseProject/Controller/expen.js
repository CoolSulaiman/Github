const express=require('express')
const User = require('../Models/UserExpense')
const sequelize=require('sequelize')

const User1=require('../Models/User')

exports.getUser = (req,res,next)=>{

User
.findAll({where :{userId : req.user.id}})
.then((response)=>{

    res.status(200).json({response})
})
.catch((err)=>{
    res.status(500).json({err})
})
};


exports.getAllusersforPremimum= (req,res,next)=>{

            let leaderboard = [];
           User1.findAll({attributes: ['id', 'Name', 'Email']})
           .then(users=>{
            
            res.status(200).json({users})
           })

           .catch((err)=>{
            res.status(500).json({err})
        })
          
}

exports.postExpensespreminm=(req,res,next)=>{

const vc=req.body.OBJ

User.findAll({where:{userId:vc } })
.then((response)=>{

    res.status(200).json({response})
})
.catch((err)=>{
    res.status(500).json({err})
})
};



exports.postAdduser=async (req,res,next)=>{

try{
        const amt=req.body.Amount;
        const des=req.body.Description;
        const category=req.body.Category

const data= await User.create({
    Amount:amt,
    Description:des,
    Category:category,
    userId:req.user.id

})

res.status(201).json({NewUser:data})
}
catch(err){
res.status(500).json({error:err})
}
}

exports.deleteUser=async(req,res,next)=>{

    try{
        const id=req.params.id;

        const data=await User
        .destroy({where:{id:id , userId:req.user.id} })

        res.status(200).json({message:"Successful"})
    }

    catch(err){
        res.status(500).json({error:err})
    }
}

// exports.editUser= async (req,res,next)=>{
//         // const id=req.params.id;
//         // console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")
//         //  console.log(req.body)
//         // const UpdatedAmount=req.body.Amount;
//         // const UpdatedDescription=req.body.Description;
//         // const UpdatedCategory=req.body.Category;
        
//         // const data= User.findByPk(id)
//         // .then(user=>{
//         //     user.Amount=UpdatedAmount;
//         //     user.Description=UpdatedDescription;
//         //     user.Category=UpdatedCategory;
//         //     user.save()
//         //     res.status(201).json({UpdatedUser:data})
//         // })
//         // .catch(err=>{
//         //     res.status(500).json({error:err})
//         // })
//         try{
//             const id=req.params.id;
    
//             const data=await User
//             .destroy({where:{id:id}})
    
//             res.status(200).json({message:"Successful"})
//         }
    
//         catch(err){
//             res.status(500).json({error:err})
//         }
    
  
// }
