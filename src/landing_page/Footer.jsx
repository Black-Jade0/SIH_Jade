import React from "react";
import "./styles.css";

function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="row">
          <div className="col footer-logo">
            <img src="media/images/logo.svg" alt="Logo" />
            <p>Empowering your career journey with personalized guidance.</p>
          </div>
          <div className="col footer-col">
            <p>Company</p>
            <a href="/about">About</a>
            <a href="/referral">Referral Programme</a>
            <a href="/careers">Careers</a>
            <a href="/press">Press & Media</a>
            <a href="/csr">Frameworks Cares (CSR)</a>
          </div>
          <div className="col footer-col">
            <p>Support</p>
            <a href="/contact">Contact</a>
            <a href="/support">Support Portal</a>
            <a href="/blog">Connect Blog</a>
            <a href="/charges">List of Charges</a>
            <a href="/downloads">Downloads & Resources</a>
          </div>
          <div className="col footer-col">
            <p>Account</p>
            <a href="/open-account">Open an Account</a>
            <a href="/challenge">60 Day Challenge</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
