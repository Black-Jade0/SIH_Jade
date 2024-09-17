import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./landing_page/home/HomePage.jsx";
import Signup from "./landing_page/signup/Signup.jsx";
import AboutPage from "./landing_page/about/AboutPage.jsx";
import ProductPage from "./landing_page/products/ProductsPage.jsx";
import SupportPage from "./landing_page/support/SupportPage.jsx";
import NotFound from "./landing_page/NotFound.jsx";
import Footer from "./landing_page/Footer.jsx";
import { CreativeTools } from "./Components/Creativetools.jsx";
import { Basicquiz } from "./Components/basicquiz.jsx";
import { Searchcareers } from "./Components/Searchcareers.jsx";
import { RecoilRoot } from "recoil";
import PricingPage from "./landing_page/ReadourBlogs/PricingPage.jsx";
import MoreinfoPage from "./Components/MoreinfoPage.jsx";
import Signin from "./landing_page/signin/Signin.jsx";
import FetchMoreInfoPage from "./Components/fetchMoreInfopage.jsx";
import MultiCourses from "./Components/Multicourses.jsx";
import IITlink from "./Components/Multicourses/IITkanpur.jsx";
import OtherIITs from "./Components/Multicourses/OtherIITs.jsx";
import Quizlandinpage from "./Components/Quiz/Quizlandingpage.jsx";
import Navbar from "./landing_page/Navbar.jsx";
import Quizapicall from "./Components/Quiz/Quizapicall.jsx";
import Resourcelandingpage from "./Components/ResourcePortal/Resourcelandingpage.jsx";
import Search from "./Components/ResourcePortal/Search.jsx";
import Careerdevtools from "./Components/ResourcePortal/careerdevtools.jsx";
import Careerguides from "./Components/ResourcePortal/careerguides.jsx";
import Edupathways from "./Components/ResourcePortal/edupathways.jsx";
import Skills from "./Components/ResourcePortal/skills.jsx";
import Studymaterials from "./Components/ResourcePortal/studymaterials.jsx";
import Questionslandingpage from "./Components/QuestionsAnswer/Questionslandingpage.jsx";
import QuestionwithAnswerpage from "./Components/QuestionsAnswer/QuestionwithAnswerpage.jsx";
import developerToolsResources from "./Components/ResourcePortal/developerToolsResources.jsx";
import CounselorTrainingPage from "./landing_page/Counsellor/Counselor.jsx";
import CareerGuidance from "./landing_page/CareerGuidance/CareerGuidance.jsx";

function App() {
    return (
        <RecoilRoot>
            <Router>
                <Navbar />
                <div className="min-h-screen">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/product" element={<ProductPage />} />
                        <Route path="/support" element={<SupportPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route
                            path="/creativetools"
                            element={<CreativeTools />}
                        />
                        <Route path="/basicquiz" element={<Basicquiz />} />
                        <Route
                            path="/searchcareers"
                            element={<Searchcareers />}
                        />
                        <Route
                            path="/traits/:code/:key"
                            element={<FetchMoreInfoPage />}
                        />
                        <Route
                            path="/moreinfopage/:code"
                            element={<MoreinfoPage />}
                        />
                        <Route
                            path="/multicourses"
                            element={<MultiCourses />}
                        />
                        <Route
                            path="/multicourses/iitkanpur"
                            element={<IITlink />}
                        />
                        <Route
                            path="/multicourses/otheriits"
                            element={<OtherIITs />}
                        />
                        <Route
                            path="/user/newquiz"
                            element={<Quizlandinpage />}
                        />
                        <Route
                            path="/user/quizcall"
                            element={<Quizapicall />}
                        />
                        <Route
                            path="/reslandingpage"
                            element={<Resourcelandingpage />}
                        />
                        <Route path="/search" element={<Search />} />
                        <Route path="/careerdevtools" element={<Careerdevtools />} />
                        <Route path="/careerguides" element={<Careerguides />} />
                        <Route path="/edupathways" element={<Edupathways />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/creerdevtools" element={<developerToolsResources />} />
                        <Route path="/CareerGuidance" element={<CareerGuidance />} />
                        <Route path="/Counselor" element={<CounselorTrainingPage />} />
                        <Route path="/studymaterials" element={<Studymaterials />} />
                        <Route path="/questionlanding" element={<Questionslandingpage />} />
                        <Route
                            path="/question/:queid"
                            element={<QuestionwithAnswerpage />}
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>

                <Footer />
            </Router>
        </RecoilRoot>
    );
}

export default App;
