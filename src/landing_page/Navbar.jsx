import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container p-2">
                <Link className="navbar-brand" to="/">
                    <i className="fa-solid fa-magnifying-glass"></i>{" "}
                </Link>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product">
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing">
                                Read our Blogs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/support">
                                Support
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
