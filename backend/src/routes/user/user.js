const express=require("express")
const axios=require("axios");
const { JWT_PASSWORD } = require("../../config");
const { PrismaClient } = require("@prisma/client");
const jwt=require("jsonwebtoken")
const router=express.Router()
const prisma=new PrismaClient();
const { authMiddleware } =require('../../middleware/index');
router.post('/signup', async(req,res)=>{
  const body= req.body;
  try{
      const mentoruser=await prisma.userSchema.create({
          data:{
              name:body.username,
              lastname:body.lastname,
              email:body.email,
              password:body.password,
              lat:body.lat,
              long:body.long,
              fieldofinterest:body.fieldofinterest,
              gender:body.gender,
              age:Number(body.age),
              phone:Number(body.phone),
              state:body.state,
              currentstd:body.currentstd,
              socialmedia: { instagram: body.instagram, twitter: body.twitter, linkedin: body.linkedin }
              
          }
      });
      const userId=mentoruser.id;
      const token=jwt.sign(userId,JWT_PASSWORD);
      res.status(200).json({message:"User created successfully",
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
      const founduser=await prisma.userSchema.findFirst({
          where:{
              email:body.email,
              password:body.password
          }
      })
      if(founduser){
          const token=jwt.sign({userId:founduser.id},JWT_PASSWORD);
          res.status(200).json({
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
      const userdata=await prisma.userSchema.findFirst({
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
      res.json({userdata:userdata})

  }catch(e){
      console.log("Got the error: ",e);
      return res.status(404).json({
          message:"Got error while fetching data"
      });
  }
})
router.get('/api/search',async (req, res) => {
    const { keyword } = req.query; // Get the keyword from the request query
    const baseURL = `https://services.onetcenter.org/ws/mnm/search?keyword=${keyword}`;
    const username = 'career_guidance_plat';
    const password = '6694ejh'; // Replace with your O*NET password
  
    try {
      // Make the request to the O*NET API with the required headers
      const response = await axios.get(baseURL, {
        auth: { username, password },
        headers: {
          'User-Agent': 'nodejs-OnetWebService/1.00 (bot)',
          'Accept': 'application/json'
        },
        timeout: 10000,
        maxRedirects: 0
      });
  
      res.json(response.data); // Send the response data back to the client
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  router.get('/api/search/moreinfo',async (req, res) => {
    const { code } = req.query; // Get the keyword from the request query
    const baseURL = `https://services.onetcenter.org/ws/mnm/careers/${code}`;
    const username = 'career_guidance_plat';
    const password = '6694ejh';
  
    try {
      // Make the request to the O*NET API with the required headers
      const response = await axios.get(baseURL, {
        auth: { username, password },
        headers: {
          'User-Agent': 'nodejs-OnetWebService/1.00 (bot)',
          'Accept': 'application/json'
        },
        timeout: 10000,
        maxRedirects: 0
      });
  
      res.json(response.data); // Send the response data back to the client
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get('/api/search/moreinfo/res', async(req,res)=>{
    const { code,key } = req.query;

  const baseURL = `https://services.onetcenter.org/ws/mnm/careers/${code}/${key}`;

  const username = 'career_guidance_plat';
    const password = '6694ejh';

  try {
    
    const response = await axios.get(baseURL, {
      auth: { username, password },
      headers: {
        'User-Agent': 'nodejs-OnetWebService/1.00 (bot)',
        'Accept': 'application/json', 
      },
      timeout: 10000,
      maxRedirects: 0,
    });

    res.send(response.data);
  } catch (error) {
    console.error('Error during O*NET API request:', error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || error.message });
  }

  })
  router.post('/quiz/data',authMiddleware,async (req,res)=>{
    const {differentsubjects, subjects}=req.body
    const {userId}=req.userId;
    
    try{
      const newdetails=await prisma.userSchema.updateMany({
      where:{
        id:userId
      },
      data:{
        Stemresponse:subjects,
        Interestbasedresponse:differentsubjects
      }
    })
    res.status(200).json({message:"Data set successfully !"})
  }catch(e){
      console.log("Got the Error: ",e)
      res.status(411);
      res.json({message:"Got the error while setting up data"})
    }
  })
  
module.exports=router;