import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./landing_page/home/HomePage.jsx";
import Signup from "./landing_page/signup/Signup.jsx";
import AboutPage from "./landing_page/about/AboutPage.jsx";
import ProductPage from "./landing_page/products/ProductsPage.jsx";
import PricingPage from "./landing_page/ReadourBlogs/PricingPage.jsx";
import SupportPage from "./landing_page/support/SupportPage.jsx";
import NotFound from "./landing_page/NotFound.jsx";
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
