
import React, { useState } from "react";
import './style.css';
import axios from "axios";
import { CreativeTools } from "../../Components/Creativetools";
function StudentRegistration() {
  const [studentInfo, setInfo] = useState({
    username: "",
    lastname: "",
    email: "",
    password: "",
    lat: "",
    long: "",
    phone: "",
    state: "",
    currentstd: "",
    age: "",
    gender: "",
    fieldofinterest: "",
    instagram: "",
    linkedin: "",
    twitter: "",
  });

  function handleChange(e, key) {
    setInfo((studentInfo) => ({
      ...studentInfo,
      [key]: e.target.value,
    }));
  }
  const [res,setRes]=useState(411);
  const handleClick=async (e)=>{
    e.preventDefault();
    if(studentInfo.email.trim()&&studentInfo.username.trim&&studentInfo.lastname.trim()){
      
      try {
        const baseURL = `http://localhost:3000/user/signup`;
        const response = await axios.post(baseURL,studentInfo);
        //It is not persisting ?
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("type","user");
        setRes(response.status);
    } catch (error) {
        console.error("Error: ", error);
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
      <h1 className="text-center mb-5">Student Registration</h1>
      <form>
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
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="5898989889"
            onChange={(e) => handleChange(e, "phone")}
            value={studentInfo.phone}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">State</label>
          <input
            type="text"
            className="form-control"
            placeholder="M.P"
            onChange={(e) => handleChange(e, "state")}
            value={studentInfo.state}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Currently Studying in</label>
          <input
            type="text"
            className="form-control"
            placeholder="10th"
            onChange={(e) => handleChange(e, "currentstd")}
            value={studentInfo.currentstd}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            className="form-control"
            placeholder="16"
            onChange={(e) => handleChange(e, "age")}
            value={studentInfo.age}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <input
            type="text"
            className="form-control"
            placeholder="Male"
            onChange={(e) => handleChange(e, "gender")}
            value={studentInfo.gender}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Field of Interest</label>
          <input
            type="text"
            className="form-control"
            placeholder="Web Development"
            onChange={(e) => handleChange(e, "fieldofinterest")}
            value={studentInfo.fieldofinterest}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Instagram Link</label>
          <input
            type="text"
            className="form-control"
            placeholder="https://instagram.com/johndoe"
            onChange={(e) => handleChange(e, "instagram")}
            value={studentInfo.instagram}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Twitter Link</label>
          <input
            type="text"
            className="form-control"
            placeholder="https://twitter.com/johndoe"
            onChange={(e) => handleChange(e, "twitter")}
            value={studentInfo.twitter}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Linkedin Link</label>
          <input
            type="text"
            className="form-control"
            placeholder="https://linkedin.com/johndoe"
            onChange={(e) => handleChange(e, "linkedin")}
            value={studentInfo.linkedin}
          />
        </div>
        {/* Add more fields as needed */}
        <div className="bg-blue-500  hover:bg-indigo-700 text-white mx-auto w-[20%]
         font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-indigo-500">
        <button type="submit" onClick={handleClick} className="">
          Register
        </button>
        </div>
      </form>
      {/*Add a dialog box to show whether signup was succesfull or not*/}
    </div>
  );
}

export default StudentRegistration;
