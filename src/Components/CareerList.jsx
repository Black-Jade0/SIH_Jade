import React from 'react';
import { Link } from 'react-router-dom';

// CareerList Component
const CareerList = ({ careers }) => {

 
  if (!Array.isArray(careers.career)) {
    return <div>Type career name for results.</div>; // Display a message when no data is available
  }
  
  return (
    <div>
      <h2>Career Opportunities</h2>
      <ul>
        {careers.career.map((career) => (
          <li key={career.code} className="career-item">
            <h3>{career.title}</h3>
            <p>
              <strong>Code:</strong> {career.code}
            </p>
            <p>
              <strong>Link:</strong>{' '}
              <Link to={`/moreinfopage/${career.code}`}>More Info</Link>
              {/* <a href={career.href} target="_blank" rel="noopener noreferrer">
              </a> */}
            </p>
            <p>
              <strong>Tags:</strong>
              <ul>
                <li>
                  Bright Outlook: {career.tags.bright_outlook ? 'Yes' : 'No'}
                </li>
                <li>Green Job: {career.tags.green ? 'Yes' : 'No'}</li>
                <li>
                  Apprenticeship Available:{' '}
                  {career.tags.apprenticeship ? 'Yes' : 'No'}
                </li>
              </ul>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CareerList;
