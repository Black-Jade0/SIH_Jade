import React from "react";
import Hero from "./Hero";

import Pricing from "./Pricing";
import Education from "./Education";

import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";

function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />

            <Pricing />
            <Education />
            <OpenAccount />
            <Footer />
        </>
    );
}

export default HomePage;
