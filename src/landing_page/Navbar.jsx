import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ChatBot2 from "../ChatBot2";

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-gray-100 w-screen rounded-lg px-3 py-2 h-[10%] border-b-2">
            <div className="flex flex-row container h-full px-4 py-2 mx-auto w-full justify-between items-center gap-6">
                <NavLink
                    className="text-xl flex justify-center items-center h-full w-[50px] text-black"
                    to="/"
                >
                    <img src="home.svg" alt="Home" className="w-6 h-6" />
                </NavLink>
                <div className="flex flex-row items-center h-full flex-nowrap">
                    <ul className="flex items-center space-x-6 h-full w-full">
                        <li className="h-full">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link h-full flex items-center justify-center text-xl px-4 py-2 hover:scale-110 transition-all rounded-full ${
                                        isActive
                                            ? " font-bold border-b-4 border-blue-600"
                                            : ""
                                    }`
                                }
                                to="/pricing"
                            >
                                Read our Blogs
                            </NavLink>
                        </li>
                        <li className="h-full">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link h-full flex items-center justify-center text-xl px-4 py-2 hover:scale-110 transition-all rounded-full ${
                                        isActive
                                            ? " font-bold border-b-4 border-blue-600"
                                            : ""
                                    }`
                                }
                                to="/creativetools"
                            >
                                Creative Tools
                            </NavLink>
                        </li>
                        {/* Resources Dropdown */}
                        <li
                            className="h-full relative"
                            onMouseEnter={handleMouseClick}
                            onMouseLeave={handleMouseClick}
                        >
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link h-full flex items-center justify-center text-xl px-4 py-2 hover:scale-110 transition-all rounded-full ${
                                        isActive
                                            ? " font-bold border-b-4 border-blue-600"
                                            : ""
                                    }`
                                }
                                to="/reslandingpage"
                            >
                                Resources
                            </NavLink>
                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <ul className="absolute top-full left-0 pt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                                    <li>
                                        <NavLink
                                            to="/careerguides"
                                            className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                                        >
                                            Career Guides
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/edupathways"
                                            className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                                        >
                                            Educational Pathways
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/studymaterials"
                                            className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                                        >
                                            Study Materials
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/skills"
                                            className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                                        >
                                            Skills and Certifications
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/careerdevtools"
                                            className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                                        >
                                            Career Development Tools
                                        </NavLink>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="h-full">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link h-full flex items-center justify-center text-xl px-4 py-2 hover:scale-110 transition-all rounded-full ${
                                        isActive
                                            ? " font-bold border-b-4 border-blue-600"
                                            : ""
                                    }`
                                }
                                to="/CareerGuidance"
                            >
                                Career Guidance
                            </NavLink>
                        </li>
                        <li className="h-full">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link h-full flex items-center justify-center text-xl px-4 py-2 hover:scale-110 transition-all rounded-full ${
                                        isActive
                                            ? " font-bold border-b-4 border-blue-600"
                                            : ""
                                    }`
                                }
                                to="/Counselor"
                            >
                                Counselor Training
                            </NavLink>
                        </li>
                        <li className="h-full">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link h-full flex items-center justify-center text-xl px-4 py-2 hover:scale-110 transition-all rounded-full ${
                                        isActive
                                            ? "font-bold border-b-4 border-blue-600"
                                            : ""
                                    }`
                                }
                                to="/support"
                            >
                                Support
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="singup text-nowrap flex flex-row gap-2 justify-between h-full items-center">
                    <NavLink
                        className="flex py-2 rounded-md hover:scale-105 text-xl text-white bg-blue-600 transition-all hover:no-underline font-[500] px-3"
                        to="/signup"
                    >
                        <button>Get Started</button>
                    </NavLink>
                    <NavLink
                        className="flex py-2 rounded-sm hover:scale-105 text-xl transition-all hover:no-underline font-[500] px-3"
                        to="/signin"
                    >
                        <button>Signin</button>
                    </NavLink>
                </div>

                <ChatBot2 />
            </div>
        </nav>
    );
}

export default Navbar;
