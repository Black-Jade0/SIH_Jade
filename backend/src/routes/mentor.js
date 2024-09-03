//Cannot use the import syntax Find out why ?
const express=require("express")
const { PrismaClient } = require('@prisma/client');
const { JWT_PASSWORD } = require('../config');
const jwt=require("jsonwebtoken")
const router=express.Router()
const prisma=new PrismaClient();

router.post('/signup', async(req,res)=>{
    const body= req.body;
    try{
        const mentoruser=await prisma.mentorSchema.create({
            data:{
                name:body.name,
                lastname:body.lastname,
                email:body.email,
                password:body.password,
                lat:body.lat,
                long:body.long,
                field:body.field,
                socialmedia:{ instagram: body.instagram, twitter: body.twitter, linkedin: body.linkedin },
            }
        });
        const userId=mentoruser.id;
        const token=jwt.sign({userId},JWT_PASSWORD);
        res.json({message:"User created successfully",
            token:token
        })
    }catch(e){
        console.log("Got the error: ",e);
        return res.status(403).json({
            message:"Got error while signing up"
        });
    }
})
router.post('/signin',async (req,res)=>{
    const body=req.body;
    try{
        const founduser=await prisma.mentorSchema.findFirst({
            where:{
                email:body.email,
                password:body.password
            }
        })
        if(founduser){
            const token=jwt.sign({userId:founduser.id},JWT_PASSWORD);
            res.json({
                message:"Signed in successfully ",
                token:token
            })
        }
    }catch(e){
        console.log("Got the error: ",e);
        return res.status(403).json({
            message:"Got error while signing in"
        });
    }
})
router.get('/data/:id',async(req,res)=>{

    //It is open to all because it won't be sharing any sensitive information
    const { id }=req.params.id
    try{
        const mentorschema=await prisma.mentorSchema.findFirst({
          where:{
            id
          },
            select:{
                name:true,
                lastname:true,
                lat:true,
                long:true,
                field:true
            }
        })
        //single user data json object
        res.json({mentorschema:mentorschema})
  
    }catch(e){
        console.log("Got the error: ",e);
        return res.status(404).json({
            message:"Got error while fetching data"
        });
    }
  })
router.get('/bulk',async(req,res)=>{

    //It is open to all because it won't be sharing any sensitive information
    try{
        const mentordata=await prisma.mentorSchema.findMany({
            select:{
                name:true,
                lastname:true,
                lat:true,
                long:true,
                field:true
            }
        })
        //mentordata is an array of mentor's data 
        res.json({mentordata:mentordata})

    }catch(e){
        console.log("Got the error: ",e);
        return res.status(404).json({
            message:"Got error while fetching data"
        });
    }
})

module.exports=router;