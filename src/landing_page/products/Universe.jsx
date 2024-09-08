import React from "react";
import './styles.css';

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Frameworks Universe </h1>
        <p>
          Extend your experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5 flex flex-col justify-center items-center gap-4">
          <img src="information-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg " style={{height : "150px" , width: "150px"}} />
          <p className="text-small text-muted">Real time chat + doubt solving</p>
        </div>
        <div className="col-4 p-3 mt-5 flex flex-col justify-center items-center gap-4">
          <img src="images.jpg" style={{height : "150px" , width: "150px"}} />
          <p className="text-small text-muted">Data Analysis for Career Trends</p>
        </div>
        <div className="col-4 p-3 mt-5 flex flex-col justify-center items-center gap-4">
          <img src="What-After-graduation.jpg" style={{height : "150px" , width: "150px"}}  />
          <p className="text-small text-muted">Degree Utilization Insights</p>
        </div>
        {/* <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted"></p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div> */}
      </div>
    </div>
  );
}

export default Universe;