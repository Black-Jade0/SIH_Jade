import React from "react";
import Hero from "./Hero";

import Pricing from "./Pricing";
import Education from "./Education";

import OpenAccount from "../OpenAccount";

function HomePage() {
    return (
        <>
            <Hero />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
    );
}

export default HomePage;
