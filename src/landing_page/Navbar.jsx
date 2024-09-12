import React from "react";
import { Link } from "react-router-dom";
import Chatbot from "../ChatBot";

function Navbar() {
    return (
        <nav className="bg-gray-100 w-screen rounded-lg px-3 py-2 h-[10%] border-b-2">
            <div className="flex flex-row container h-full px-4 py-2 mx-auto w-full justify-between items-center">
                <Link
                    className="text-xl flex justify-center items-center h-full w-auto text-black"
                    to="/"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-encore-id="icon"
                        role="img"
                        aria-hidden="true"
                        className="Svg-sc-ytk21e-0 iYxpxA home-active-icon" // Changed 'class' to 'className'
                        viewBox="0 0 24 24"
                    >
                        <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path>
                    </svg>
                </Link>
                <div className="flex flex-row items-center h-full">
                    <ul className="flex items-center space-x-6 h-full w-full">
                        <li className="flex flex-row items-center nav-item h-full hover:no-underline hover:bg-slate-300 rounded-full px-4 py-1 hover:scale-110 transition-all">
                            <Link
                                className="nav-link hover:no-underline text-xl"
                                to="/about"
                            >
                                About
                            </Link>
                        </li>
                        {/* <li className="flex flex-row items-center nav-item h-full hover:no-underline hover:bg-slate-300 rounded-full px-4 py-1 hover:scale-110 transition-all">
                            <Link
                                className="nav-link hover:no-underline text-xl"
                                to="/product"
                            >
                                Dashboard
                            </Link>
                        </li> */}
                        <li className="flex flex-row items-center nav-item h-full hover:no-underline hover:bg-slate-300 rounded-full px-4 py-1 hover:scale-110 transition-all">
                            <Link
                                className="nav-link hover:no-underline text-xl"
                                to="/pricing"
                            >
                                Read our Blogs
                            </Link>
                        </li>
                        <li className="flex flex-row items-center nav-item h-full hover:no-underline hover:bg-slate-300 rounded-full px-4 py-1 hover:scale-110 transition-all">
                            <Link
                                className="nav-link hover:no-underline text-xl"
                                to="/support"
                            >
                                Support
                            </Link>
                        </li>
                        <li className="flex flex-row items-center nav-item h-full hover:no-underline hover:bg-slate-300 rounded-full px-4 py-1 hover:scale-110 transition-all">
                            <Link
                                className="nav-link hover:no-underline text-xl"
                                to="/creativetools"
                            >
                                Creative Tools
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="singup flex flex-row gap-2 justify-between h-full items-center">
                    <Link
                        className="flex py-2 rounded-md hover:scale-105 text-xl text-white bg-blue-600 transition-all hover:no-underline font-[500] px-3"
                        to="/signup"
                    >
                        <button>Get Started</button>
                    </Link>
                    <Link
                        className="flex py-2 rounded-sm hover:scale-105 text-xl transition-all hover:no-underline font-[500] px-3"
                        to="/signin"
                    >
                        <button>Signin</button>
                    </Link>
                </div>
            </div>
            <Chatbot/>
        </nav>
    );
}

export default Navbar;
