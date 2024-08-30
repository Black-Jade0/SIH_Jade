// src/components/Signup.jsx
import React, { useState } from "react";
import SignupTypeSelection from "./SignupTypeSelection";
import StudentSignup from "./StudentsSignup";
import MentorSignup from "./MentorSignup";
import AdminSignup from "./AdminSignup";
import './style.css';


function Signup() {
  const [signupType, setSignupType] = useState("");

  return (
    <div className="container">
      {!signupType ? (
        <SignupTypeSelection setSignupType={setSignupType} />
      ) : signupType === "student" ? (
        <StudentSignup />
      ) : signupType === "admin" ? (
        <MentorSignup />
      ) : signupType === "mentor" (
        <AdminSignup />
      )}
    </div>
  );
}

export default Signup;
