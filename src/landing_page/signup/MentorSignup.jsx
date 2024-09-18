
import React, { useState } from "react";
import axios from "axios"
import Questionslandingpage from "../../Components/QuestionsAnswer/Questionslandingpage";
import { BACKENDBASEURL } from "../../config";

function MentorSignup() {
  const [mentorInfo, setInfo] = useState({
    username: "", //ye name hai
    lastname: "",
    email: "",
    password: "",
    lat: "",
    long: "",
    fieldofinterest: "",  //field
    instagram: "",
    linkedin: "",
    twitter: "",
  });

  function handleChange(e, key) {
    setInfo((mentorInfo) => ({
      ...mentorInfo,
      [key]: e.target.value,
    }));
  }
  const [res,setRes]=useState(411);
  const handleClick=async (e)=>{
    e.preventDefault();
    if(mentorInfo.email.trim()&&mentorInfo.username.trim()&&mentorInfo.lastname.trim()){
      
      try {
        const baseURL = BACKENDBASEURL+'/mentor/signup';
        const response = await axios.post(baseURL,mentorInfo);
        //It is not persisting ?
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("type","mentor");
        setRes(response.status);
    } catch (error) {
        console.error("Error: ", error);
    }
    }
  }
  if(res==200){
    return(
      <Questionslandingpage/>
    )
  }
  return (
    <div className="container mt-5">
      <h1 className="text-center text-xl font-bold mb-5">Counselor Registration</h1>
      <form>
        {/* Add form fields for counselor registration */}
        <div className="mb-3">
          <div className="justify-center flex text-lg font-semibold m-2">First name</div>
          <input type="text" className="mx-auto w-[35%] flex border shadow-md px-2 py-1" placeholder="Enter your name" onChange={(e)=>{handleChange(e,"username")}} />
        </div>
        <div className="mb-3">
          <label className="justify-center flex text-lg font-semibold m-2">Last name</label>
          <input type="text" className="mx-auto w-[35%] flex border shadow-md px-2 py-1" placeholder="Enter your name" onChange={(e)=>{handleChange(e,"lastname")}}/>
        </div>
        <div className="mb-3">
          <label className="justify-center flex text-lg font-semibold m-2">Email</label>
          <input type="email" className="mx-auto w-[35%] flex border shadow-md px-2 py-1" placeholder="Enter your email" onChange={(e)=>{handleChange(e,"email")}}/>
        </div>
        <div className="mb-3">
          <label className="justify-center flex text-lg font-semibold m-2">Password</label>
          <input type="password" className="mx-auto w-[35%] flex border shadow-md px-2 py-1" placeholder="Enter your password"onChange={(e)=>{handleChange(e,"password")}} />
        </div>
        <div className="mb-3">
          <label className="justify-center flex text-lg font-semibold m-2">Instagram</label>
          <input type="email" className="mx-auto w-[35%] flex border shadow-md px-2 py-1" placeholder="Enter your email" onChange={(e)=>{handleChange(e,"instagram")}}/>
        </div>
        <div className="mb-3">
          <label className="justify-center flex text-lg font-semibold m-2">Linkedin</label>
          <input type="email" className="mx-auto w-[35%] flex border shadow-md px-2 py-1" placeholder="Enter your email" onChange={(e)=>{handleChange(e,"linkedin")}}/>
        </div>
        <div className="mb-3">
          <label className="justify-center flex text-lg font-semibold m-2">Twitter</label>
          <input type="email" className="mx-auto w-[35%] flex border shadow-md px-2 py-1" placeholder="Enter your email" onChange={(e)=>{handleChange(e,"twitter")}}/>
        </div>
        <div className="mb-3">
          <label className="justify-center flex text-lg font-semibold m-2">Field of interest</label>
          <input type="email" className="mx-auto w-[35%] flex border shadow-md px-2 py-1" placeholder="Enter your email" onChange={(e)=>{handleChange(e,"fieldofinterest")}}/>
        </div>
        {/* Add more fields as needed */}
        <div className="bg-blue-500  hover:bg-indigo-700 text-white mx-auto w-[20%]
         font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-indigo-500">
        <button 
         onClick={handleClick} type="submit" >Register
        </button> 
        </div>
        
      </form>
    </div>
  );
}

export default MentorSignup;
