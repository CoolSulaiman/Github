const { response } = require('express');
const path =require('path')
const User=require('../models/user')
const rootDir = require('../util/path');


exports.getUsers = (req, res, next) => {
    User
      .findAll()
      .then((response) => {
        res.status(200).json({ response });
      })
      .catch((err) => res.status(500).json(err));
  };

// exports.postUser=((req,res,next) => {
//     console.log(req.body)
//         const name=req.body.name;
//         const email =req.body.email;
//         const PhoneNumber=req.body.phone;
    
//         User.create({
//             name,
//             email,
//             PhoneNumber
//         })
//         .then(res=>{
//             res.status(201).json({ data: response });
//             console.log(res)
//          })
//             .catch((err) => res.status(500).json({ err }));
//     })

    exports.postUser= async(req,res,next)=>{
        // console.log(req.data)
        try{
            if(!req.body.phone){
                throw new Error('Phone Number is mandatory');
            }
        const name=req.body.name;
        const email =req.body.email;
        const Phonenumber=req.body.phone;
    
         const data= await User.create(
            {
            name:name,
            email:email,
            PhoneNumber:Phonenumber
        });
    
        res.status(201).json({NewData:data});
        }catch(err){
            res.status(500).json({error:err});
        }
    }

    exports.deleteUser=((req,res,next)=>{
        const id=req.params.id;
        console.log(id)

        User
        .destroy({where:{id:id}})
        .then((response)=>res.status(200).json({message:"Successful"}))
        .catch((err) => {
            console.log(err);
          });
    })
