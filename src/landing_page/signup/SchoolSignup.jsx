// src/components/SchoolSignup.jsx
import React from "react";
import './style.css';


function SchoolSignup() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">School Registration</h1>
      <form>
        {/* Add form fields for school registration */}
        <div className="mb-3">
          <label className="form-label">School Name</label>
          <input type="text" className="form-control" placeholder="Enter school name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        {/* Add more fields as needed */}
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default SchoolSignup;
