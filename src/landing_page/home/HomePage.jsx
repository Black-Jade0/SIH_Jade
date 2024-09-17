import React from "react";
import Hero from "./Hero";
import OpenAccount from "../OpenAccount";
import ProductsPage from "../products/ProductsPage";


function HomePage() {
    return (
        <>
            <Hero />
            <ProductsPage/>
            <OpenAccount />
        </>
    );
}

export default HomePage;
