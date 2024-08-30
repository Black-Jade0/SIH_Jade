import React from "react";
import './styles.css';
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="MicrosoftTeams-image--17-.jpg"
        productName="AI-Powered Chatbot"
        productDesription="Develop an AI chatbot that provides personalized career advice by analyzing students' interests, academic performance, and financial conditions, suggesting scholarship options and government aid."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
        imageStyle={{ width: '500px', height: '450px' }} 
      />
      <RightSection
        imageURL="For-blog_Monitor-Stocks-02.jpg"
        productName="Portfolio Analysis"
        productDesription=" Implement an AI-driven portfolio scanner that evaluates a student’s projects and skills, 
        offering targeted career suggestions and improvement tips."
        learnMore="#"
        imageStyle={{ width: '500px', height: '450px' }} 
      />
      <LeftSection
        imageURL=" leaderboard-illustration.svg"
        productName="Competency- Based Assessments"
        productDesription="Introduce assessments that evaluate students on their competencies
rather than just academic knowledge. For example, tests can measure
problem-solving abilities, creativity, and leadership skills, and these
results can influence career recommendations."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
        imageStyle={{ width: '500px', height: '450px' }} 
      />
      <RightSection
        imageURL="community-driven-development.jpg"
        productName="Community-Driven Experience Sharing"
        productDesription="Create a platform where users can share their career experiences, challenges, and successes, providing real-world insights and advice."
        learnMore="#"
        imageStyle={{ width: '500px', height: '450px' }}
      />
      <LeftSection
        imageURL="Career-Exploration-Games-for-High-Schoolers-pin.jpg"
        productName="Virtual Career Simulation Game"
        productDesription="Create a virtual simulation game where students can experience different careers, understanding the tasks, challenges, and rewards associated with each profession."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
        imageStyle={{ width: '500px', height: '450px' }}
      />
      <p className="text-center mt-5 mb-5">
        Want to explore more? <a href="#">Click here!</a>
      </p>
      <Universe />
    </>
  );
}

export default ProductsPage;