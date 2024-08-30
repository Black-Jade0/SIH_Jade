import React from "react";
import './index.css';

function Education() {
  return (
    <div className="education-container container mt-5">
      <div className="row">
        <div className="col-6">
          <img
            src="_c34102da-9849-11e5-b4f4-1b7a09ed2cea.avif"
            style={{ width: "85%" }}
            alt="Education"
          />
        </div>
        <div className="col-6">
          <h1 className="education-title mb-2">Education</h1>
          <p className="education-description">
            Quizzes customized for counselors to leverage their knowledge.
          </p>
          <a href="#">
            Learn More
            <i className="fa fa-long-arrow-right education-icon" aria-hidden="true"></i>
          </a>
          <p className="education-description mt-5">
            Assessment Q&A, for all your career-related queries.
          </p>
          <a href="#">
            Assessment Q&A
            <i className="fa fa-long-arrow-right education-icon" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
