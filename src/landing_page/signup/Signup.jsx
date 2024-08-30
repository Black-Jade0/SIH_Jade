// src/components/Signup.jsx
import React, { useState } from "react";
import SignupTypeSelection from "./SignupTypeSelection";
import StudentSignup from "./StudentsSignup";
import CounselorSignup from "./CounselorSignup";
import SchoolSignup from "./SchoolSignup";
import './style.css';


function Signup() {
  const [signupType, setSignupType] = useState("");

  return (
    <div className="container">
      {!signupType ? (
        <SignupTypeSelection setSignupType={setSignupType} />
      ) : signupType === "student" ? (
        <StudentSignup />
      ) : signupType === "counselor" ? (
        <CounselorSignup />
      ) : (
        <SchoolSignup />
      )}
    </div>
  );
}

export default Signup;
