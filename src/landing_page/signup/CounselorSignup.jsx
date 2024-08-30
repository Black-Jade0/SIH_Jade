// src/components/CounselorSignup.jsx
import React from "react";
import './style.css';

function CounselorSignup() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Counselor Registration</h1>
      <form>
        {/* Add form fields for counselor registration */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Enter your password" />
        </div>
        {/* Add more fields as needed */}
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default CounselorSignup;
