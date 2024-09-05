import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./landing_page/home/HomePage.jsx";
import Signup from "./landing_page/signup/Signup.jsx";
import AboutPage from "./landing_page/about/AboutPage.jsx";
import ProductPage from "./landing_page/products/ProductsPage.jsx";
import PricingPage from "./landing_page/ReadourBlogs/PricingPage.jsx";
import SupportPage from "./landing_page/support/SupportPage.jsx";
import NotFound from "./landing_page/NotFound.jsx";
import Footer from "./landing_page/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CreativeTools } from "./Components/Creativetools.jsx";
import { Basicquiz } from "./Components/basicquiz.jsx";
import { Searchcareers } from "./Components/Searchcareers.jsx";
import { RecoilRoot } from "recoil";
import MoreinfoPage from "./Components/MoreinfoPage.jsx";
import Signin from "./landing_page/signin/Signin.jsx";
import FetchMoreInfoPage from "./Components/fetchMoreInfopage.jsx";
import MultiCourses from "./Components/Multicourses.jsx";
import IITlink from "./Components/Multicourses/IITkanpur.jsx";
import Navbar from "./landing_page/Navbar.jsx";


function App() {
    return (
        <RecoilRoot>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/creativetools" element={<CreativeTools />} />
                <Route path="/basicquiz" element={<Basicquiz />} />
                <Route path="/searchcareers" element={<Searchcareers />} />
                <Route path="/traits/:code/:key" element={<FetchMoreInfoPage />} />
                <Route path="/moreinfopage/:code" element={<MoreinfoPage />} />
                <Route path="/multicourses" element={<MultiCourses />} />
                <Route path="/multicourses/iitkanpur" element={<IITlink />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
        </RecoilRoot>
    );
}

export default App;
