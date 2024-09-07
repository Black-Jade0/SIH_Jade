// src/components/SignupTypeSelection.jsx
import React from "react";
import '../signup/style.css';


function SigninTypeSelection({ setSigninType }) {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-4 text-center">
          <button
            className="btn btn-primary mb-3"
            onClick={() => setSigninType("student")}
          >
            Student
          </button>
        </div>
        <div className="col-4 text-center">
          <button
            className="btn btn-secondary mb-3"
            onClick={() => setSigninType("mentor")}
          >
            Counselor
          </button>
        </div>
        <div className="col-4 text-center">
          <button
            className="btn btn-success mb-3"
            onClick={() => setSigninType("admin")}
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
}

export default SigninTypeSelection;
