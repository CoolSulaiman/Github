const express=require('express')
const User = require('../Models/user')


exports.PostUsers=async(req,res,next)=>{
        try{
                const name=req.body.Name;
                const email=req.body.Email;
                const password=req.body.Password;

                if(!name || !email || !password){
                    return res.status(400).json({message:'add all fields'})
                }
                const user = await User.findAll({where:{email}});
                if(user.length>0){
                    return res.status(409).json({message:'user already exist'})
                }
        
        const data= await User.create({
            Name:name,
            Email:email,
            Password:password
        })
        
        res.status(201).json({NewUser:data})
        }


        catch(err){
        res.status(500).json({error:err})
        }
        

    }


    exports.postLogin=async  (req,res,next)=>{

        try{
        const email=req.body.email;
        const password=req.body.password;

        if( !email || !password){
            return res.status(400).json({message:'add all fields'})
        }

        
        const user = await User.findAll({where:{email}})
        if(user.length === 0){
            return res.status(404).json({message:'user not found'})
        }
        const foundUser = user[0];
        if(foundUser.Password !== password){
            return res.status(401).json({message:'invalid password'})
        }
         res.status(200).json(foundUser)

    
    }
    catch(err){
        res.status(500).json({error:err})
        }
    
}


