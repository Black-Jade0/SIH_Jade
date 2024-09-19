import React, { useState } from "react";
import '../signup/style.css';
import axios from "axios";
import { CreativeTools } from "../../Components/Creativetools";
import { BACKENDBASEURL } from "../../config"
function StudentSignin() {
  const [studentInfo, setInfo] = useState({
    email:"",
    password:""
  });

  function handleChange(e, key) {
    setInfo((studentInfo) => ({
      ...studentInfo,
      [key]: e.target.value,
    }));
  }
  const [res,setRes]=useState(404);
  const [flag,setFlag]=useState(false)
  const handleClick=async (e)=>{
    e.preventDefault();
    if(studentInfo.email.trim()&&studentInfo.password.trim()){
      try {
        const baseURL = BACKENDBASEURL+`/user/signin`;
        const response = await axios.post(baseURL,studentInfo);
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("type","user");
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
        <CreativeTools/>
    )
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Student Login</h1>
      <form>
        {/* Add form fields for student registration */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your email"
            onChange={(e) => handleChange(e, "email")}
            value={studentInfo.email}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            onChange={(e) => handleChange(e, "password")}
            value={studentInfo.password}
          />
        </div>
        
        {/* Add more fields as needed */}
        <button type="submit" onClick={handleClick} className="btn btn-primary">
          Signin
        </button>
      </form>
      {/*Add a dialog box*/}
      {flag&&res!=200?<div>Unable to login</div>:null}
    </div>
  );
}

export default StudentSignin;
