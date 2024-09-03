// src/components/Signup.jsx
import React, { useState } from "react";
import '../signup/style.css';
import StudentSignin from "./Studentsignin";
import SigninTypeSelection from "./SigninTypeSelection";
import MentorSignup from "../signup/MentorSignup";
import AdminSignup from "../signup/AdminSignup";


function Signin() {
  const [signinType, setSigninType] = useState("");

  return (
    <div className="container">
      {!signinType ? (
        <SigninTypeSelection setSigninType={setSigninType} />
      ) : signinType === "student" ? (
        <StudentSignin/>
      ) : signinType === "mentor" ? (
        <MentorSignup />
      ) : (
        <AdminSignup />
      )}
    </div>
  );
}

export default Signin;
