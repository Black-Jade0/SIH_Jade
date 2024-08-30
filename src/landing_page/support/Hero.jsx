import React from "react";
import './styles.css';

function Hero() {
  return (
    <section className="hero-section" id="supportHero">
      <div className="support-content text-center text-white p-5">
        <h1 className="hero-title">We're Here to Help You Succeed</h1>
        <p className="hero-subtitle">
          Empowering your career journey with personalized support and resources.
        </p>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="support-card shadow-lg">
              <div className="card-body">
                <div className="icon-container mb-3">
                  <i className="fas fa-question-circle fa-3x"></i>
                </div>
                <h5 className="card-title">FAQ</h5>
                <p className="card-text">
                  Get answers to the most frequently asked questions about our platform.
                </p>
                <a href="/faq" className="btn btn-outline-light mt-3">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="support-card shadow-lg">
              <div className="card-body">
                <div className="icon-container mb-3">
                  <i className="fas fa-envelope fa-3x"></i>
                </div>
                <h5 className="card-title">Contact Us</h5>
                <p className="card-text">
                  Reach out to our support team for personalized assistance.
                </p>
                <a href="/contact" className="btn btn-outline-light mt-3">Get in Touch</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="support-card shadow-lg">
              <div className="card-body">
                <div className="icon-container mb-3">
                  <i className="fas fa-book fa-3x"></i>
                </div>
                <h5 className="card-title">Resources</h5>
                <p className="card-text">
                  Explore our library of articles, guides, and tools for career growth.
                </p>
                <a href="/resources" className="btn btn-outline-light mt-3">Explore Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
