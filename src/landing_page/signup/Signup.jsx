// src/components/Signup.jsx
import React, { useState } from "react";
import SignupTypeSelection from "./SignupTypeSelection";
import StudentSignup from "./StudentsSignup";
import CounselorSignup from "./CounselorSignup";
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
        <CounselorSignup />
      ) : signupType === "mentor" (
        <AdminSignup />
      )}
    </div>
  );
}

export default Signup;
