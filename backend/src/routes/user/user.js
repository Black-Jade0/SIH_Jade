const express=require("express")
require('dotenv').config();
const axios=require("axios");
//const { JWT_PASSWORD } = require("../../config");
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
      const token=jwt.sign(userId,process.env.JWT_PASSWORD);
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
          const token=jwt.sign({userId:founduser.id},process.env.JWT_PASSWORD);
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
    const username = process.env.usernameonet;
    const password = process.env.passwordonet; // Replace with your O*NET password
  
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
    const username = process.env.usernameonet;
    const password = process.env.passwordonet;
  
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

  const username = process.env.usernameonet;
    const password = process.env.passwordonet;

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

  router.post('/questions',authMiddleware ,async (req, res) => {
    const { title, content, author } = req.body;
    const authorid = req.userId;
    try {
      const question = await prisma.question.create({
        data: { title, content, author, authorid }
      });
      res.json(question);
    } catch (error) {
      console.log("got the error: ",error)
      res.status(500).json({ error: "Failed to create question" });
    }
  });

  router.get('/questions', async (req, res) => {
    try {
      const questions = await prisma.question.findMany({
        include: { answers: true }
      });
      res.json(questions);
    } catch (error) {
      console.log("got the error: ",error)
      res.status(500).json({ error: "Failed to fetch questions" });
    }
  });

  router.post('/answers', authMiddleware,async (req, res) => {
    const { content, author, questionId } = req.body;
    const authorid = req.userId;
    try {
      const answer = await prisma.answer.create({
        data: { content, author, authorid ,questionId }
      });
      res.json(answer);
    } catch (error) {
      console.log("got the error: ",error)
      res.status(500).json({ error: "Failed to post answer" });
    }
  });

  router.get('/sp/answer', async (req,res)=>{
    const {questionId} = req.query;
    try{
      const answer = await prisma.answer.findMany({
        where:{
          questionId
        }
      })
      res.status(200).json(answer);

    }catch(error){
      console.log("Got the error: ",error);
      res.status(500).json({error:"Failed to get the answer"})
    }
  })

  router.get('/sp/question', async (req,res)=>{
    const {id} = req.query;
    try{
      const question = await prisma.question.findFirst({
        where:{
          id
        }
      })
      res.status(200).json(question);

    }catch(error){
      console.log("Got the error: ",error);
      res.status(500).json({error:"Failed to get the question"})
    }
  })
  
module.exports=router;