import React, { useState } from "react";

import axios from "axios";
import { BACKENDBASEURL } from "../../config";
import Questionslandingpage from "../../Components/QuestionsAnswer/Questionslandingpage";
function MentorSignin() {
  const [mentorInfo, setInfo] = useState({
    email:"",
    password:""
  });

  function handleChange(e, key) {
    setInfo((mentorInfo) => ({
      ...mentorInfo,
      [key]: e.target.value,
    }));
  }
  const [res,setRes]=useState(404);
  const [flag,setFlag]=useState(false)
  const handleClick=async (e)=>{
    e.preventDefault();
    if(mentorInfo.email.trim()&&mentorInfo.password.trim()){
      try {
        const baseURL = BACKENDBASEURL+'/mentor/signup';
        const response = await axios.post(baseURL,mentorInfo);
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("type","mentor");
        setFlag(!flag)
        setRes(response.status);
        
    } catch (error) {
        console.error("Error: ", error);
        setFlag(!flag)
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
      <h1 className="text-center text-lg font-bold mb-5">Mentor Login</h1>
      <form>
        {/* Add form fields for student registration */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your email"
            onChange={(e) => handleChange(e, "email")}
            value={mentorInfo.email}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            onChange={(e) => handleChange(e, "password")}
            value={mentorInfo.password}
          />
        </div>
        {/* Add more fields as needed */}
        <div className="bg-blue-500  hover:bg-indigo-700 text-white mx-auto w-[20%]
         font-bold py-3 px-4 rounded focus:outline-none focus:ring focus:ring-indigo-500">
        <button type="submit" onClick={handleClick} className="w-[20%] mx-auto">
          Signin
        </button>
        </div>
      </form>
      {/*Add a dialog box*/}
      {flag&&res!=200?<div>Unable to login</div>:null}
    </div>
  );
}

export default MentorSignin;
