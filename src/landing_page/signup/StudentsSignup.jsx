import React, { useState } from "react";
import './style.css';
import axios from "axios";
import { BACKENDBASEURL } from "../../config"
import { useNavigate } from "react-router-dom";
function StudentRegistration() {
  const navigate = useNavigate();
  const [studentInfo, setInfo] = useState({
    username: "",
    lastname: "",
    email: "",
    password: "",
  });

  function handleChange(e, key) {
    setInfo((studentInfo) => ({
      ...studentInfo,
      [key]: e.target.value,
    }));
  }
  const handleClick=async (e)=>{
    e.preventDefault();
    if(studentInfo.email.trim()&&studentInfo.username.trim&&studentInfo.lastname.trim()){
      
      try {
        const baseURL = BACKENDBASEURL+`/user/signup`;
        const response = await axios.post(baseURL,studentInfo);
        //It is not persisting ?
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("type","user");
        handleResponse(response.status);
    } catch (error) {
        console.error("Error: ", error);
    }
    }
  }
  const handleResponse = (res) => {
    if (res === 200) {
      // Redirect to the "CreativeTools" page
      window.location.assign('/creativetools')
    }
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-center mb-5">Student Registration</h1>
      <form >
        {/* Add form fields for student registration */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            onChange={(e) => handleChange(e, "username")}
            value={studentInfo.username}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Lastname</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your lastname"
            onChange={(e) => handleChange(e, "lastname")}
            value={studentInfo.lastname}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
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
        
        <div className="bg-blue-500  hover:bg-indigo-700 text-white mx-auto w-[20%]
         font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-indigo-500">
        <button type="submit" onClick={handleClick} className="">
          Register
        </button>
        </div>
      </form>
    </div>
  );
}

export default StudentRegistration;
