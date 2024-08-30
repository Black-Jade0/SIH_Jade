import React from "react";
import "./index.css";

function Pricing() {
    return (
        <div className="pricing-container container">
            <div className="row">
                <div className="col-4">
                    <h1 className="pricing-title mb-3">Personal Guidance</h1>
                    <p className="pricing-description">
                        We pioneered the concept of customized and planned
                        career-oriented guidelines for both students and
                        counselors in their respective fields.
                    </p>
                    <a href="#">
                        See Details
                        <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                        ></i>
                    </a>
                </div>
                <div className="col-2"></div>
                <div className="col-6 mb-5">
                    <div className="row text-center">
                        <div className="col p-3 mx-4 pricing-card">
                            <h3 className="mb-3">For Counselors</h3>
                            <p>
                                Get yourself certified with our{" "}
                                <b>Future Framework Program</b>.
                            </p>
                        </div>
                        <div className="col p-3 mx-4 pricing-card">
                            <h3 className="mb-3">For Students</h3>
                            <p>
                                Get your doubts cleared with expert and
                                certified mentors.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
