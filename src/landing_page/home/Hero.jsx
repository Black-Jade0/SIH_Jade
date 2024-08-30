import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Hero() {
    return (
        <div className="hero-container container text-center">
            <img
                src="./public/pexels-fauxels-3183150.jpg"
                alt="Hero Image"
                className="hero-image mb-5"
            />
            <h1 className="hero-title">One step ahead</h1>
            <p className="hero-description">
                Online platform to access the untold stories, career paths for a
                better tomorrow
            </p>
            <Link className="nav-link active" aria-current="page" to="/signup">
                <button className="hero-button btn btn-primary">Signup</button>
            </Link>
        </div>
    );
}

export default Hero;
