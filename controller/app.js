const express=require("express");
const bcrypt=require("bcrypt");
const cookie=require("cookie-parser")

const jwt= require("jsonwebtoken")

require("../connection/con")

const Users=require("../schema/collection")

const Resgitartion=(req,res)=>{
    bcrypt.hash(req.body.Password, 10, function(err,hashedPass){
        if(err){
            res.json({
                error:err
            })
        }
        let user=new Users ({
            FirstName:req.body.FirstName,
            LastName:req.body.FirstName,
            Password:hashedPass,
            Email:req.body.Email
        })
        user.save()
        .then(user =>{
            res.json({
                message:"user Regsittared successfuly..",
                user:user
            })
        }).catch(error =>{
            res.json({
                message:"An error occured!",
                error:error
            })
            console.log(error);
        })
    })
    
    
}

const Login=(req,res)=>{
    var FirstName =req.body.FirstName
    var Password=req.body.Password
    Users.findOne({$or:[{Email:FirstName},{LastName:FirstName}]})

    .then(Users =>{
        if(Users){
            console.log(Users)
            bcrypt.compare(Password,Users.Password, function(err,result){
                if(err){
                    res.json({
                        error:err
                    })
                }
                if(result){
                    let token=jwt.sign({id:Users.id}, 'subhashini' ,{expiresIn:"1h"})
                    res.cookie("user",token)

                    res.json({
                        message:"login succesfuly..",
                        token
                    })
                }else{
                    res.json({
                        message:"Password dose not matched!"
                    })
                }
            })
        }else{
            res.json({
                message:"No user found!"
            })
        }
    })
}

module.exports={Resgitartion,Login}