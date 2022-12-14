const express=require('express')
const User = require('../Models/user')

exports.getUser = (req,res,next)=>{


User
.findAll()
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
    Category:category
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
        .destroy({where:{id:id}})

        res.status(200).json({message:"Successful"})
    }

    catch(err){
        res.status(500).json({error:err})
    }
}

exports.editUser= async (req,res,next)=>{
        // const id=req.params.id;
        // console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")
        //  console.log(req.body)
        // const UpdatedAmount=req.body.Amount;
        // const UpdatedDescription=req.body.Description;
        // const UpdatedCategory=req.body.Category;
        
        // const data= User.findByPk(id)
        // .then(user=>{
        //     user.Amount=UpdatedAmount;
        //     user.Description=UpdatedDescription;
        //     user.Category=UpdatedCategory;
        //     user.save()
        //     res.status(201).json({UpdatedUser:data})
        // })
        // .catch(err=>{
        //     res.status(500).json({error:err})
        // })
        try{
            const id=req.params.id;
    
            const data=await User
            .destroy({where:{id:id}})
    
            res.status(200).json({message:"Successful"})
        }
    
        catch(err){
            res.status(500).json({error:err})
        }
    
  
}
