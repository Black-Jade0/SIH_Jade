import React from "react";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className="hero-container container text-center py-12 bg-white">
            <h1 className="hero-title font-bold pt-3 text-6xl text-gray-800">
                One step ahead
            </h1>
            <p className="hero-description text-xl my-5 text-gray-600">
                Online platform to access the untold stories, career paths for a
                better tomorrow
            </p>
            <div>
                <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/signup"
                >
                    <button className="hero-button bg-blue-500 text-white py-3 text-lg px-6 rounded-sm transition-all hover:bg-blue-700">
                        Get Started
                    </button>
                </Link>
            </div>
            <div className="w-full p-4 flex flex-row justify-center">
                <div className="flex w-[70%] justify-center items-center text-xl p-3">
                    Get Started Career Assessment | Personalised Guidance |
                    Profile Building | College Roadmap Planning | College
                    Applications | Scholarship Hunt
                </div>
            </div>
            <div className="Home-image">
                <img
                    src="./public/desktop2.svg"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Hero;
