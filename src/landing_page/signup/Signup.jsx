// src/components/Signup.jsx
import React, { useState } from "react";
import SignupTypeSelection from "./SignupTypeSelection";
import StudentSignup from "./StudentsSignup";
import MentorSignup from "./MentorSignup";
import AdminSignup from "./AdminSignup";
import './style.css';


function Signup() {
  const [signupType, setSignupType] = useState("");
  console.log("signupType is: ",signupType)
  return (
    <div className="container">
      
      {!signupType ? (
        <SignupTypeSelection setSignupType={setSignupType} />
      ) : signupType === "student" ? (
        <StudentSignup />
      ) : signupType === "mentor" ? (
        <MentorSignup />
      ) : ( null
      )}
    </div>
  );
}

export default Signup;
