import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Moreinfo = ({ career }) => {
  if (!career) {
    return <div>No career details available.</div>;
  }

  return (
    <div className="career-details">
      <h2>{career.title}</h2>
      <p>
        <strong>Code:</strong> {career.code}
      </p>

      {/* Display alternate titles */}
      {career.also_called?.title && (
        <div>
          <strong>Also Called:</strong>
          <ul>
            {career.also_called.title.map((title, index) => (
              <li key={index}>{title}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Display job description */}
      {career.what_they_do && (
        <div>
          <strong>What They Do:</strong>
          <p>{career.what_they_do}</p>
        </div>
      )}

      {/* Display tasks on the job */}
      {career.on_the_job?.task && (
        <div>
          <strong>On the Job Tasks:</strong>
          <ul>
            {career.on_the_job.task.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Display tags */}
      <div>
        <strong>Tags:</strong>
        <ul>
          <li>Bright Outlook: {career.tags.bright_outlook ? 'Yes' : 'No'}</li>
          <li>Green Job: {career.tags.green ? 'Yes' : 'No'}</li>
          <li>Apprenticeship Available: {career.tags.apprenticeship ? 'Yes' : 'No'}</li>
        </ul>
      </div>

      {/* Display career resources */}
      {career.resources?.resource && (
        <div>
          <strong>Resources:</strong>
          <ul>
            {career.resources.resource.map((res, index) => (
              <li key={index}>
                {/* <a href={res.href} target="_blank" rel="noopener noreferrer">
                  {res.title}
                </a> */}
                <Link to={`/traits/${career.code}/${res.title}`}>{res.title}</Link> 
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Display career video if available */}
      {career.career_video && (
        <div>
          <strong>Career Video:</strong> Available
        </div>
      )}
    </div>
  );
};


export default Moreinfo;
