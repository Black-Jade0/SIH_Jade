import React from "react";
import './styles.css';

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 p-3">
        <h1>What's for you!</h1>
        <h3 className="text-muted mt-3 fs-4">
          intutive form of learning
        </h3>
        <p className="mt-3 mb-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
           programs offered 
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;