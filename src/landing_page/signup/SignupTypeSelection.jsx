// src/components/SignupTypeSelection.jsx
import React from "react";
import './style.css';


function SignupTypeSelection({ setSignupType }) {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Register as</h1>
      <div className="row justify-content-center">
        <div className="col-4 text-center">
          <button
            className="btn btn-primary mb-3"
            onClick={() => setSignupType("student")}
          >
            Student
          </button>
        </div>
        <div className="col-4 text-center">
          <button
            className="btn btn-secondary mb-3"
            onClick={() => setSignupType("counselor")}
          >
            Counselor
          </button>
        </div>
        <div className="col-4 text-center">
          <button
            className="btn btn-success mb-3"
            onClick={() => setSignupType("school")}
          >
            School
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupTypeSelection;
