import { useState } from "react";

import Titlecard from "./dropdown/titlecard";

const scienceResources = [
  {
    name: "iDreamCareer",
    description: "iDreamCareer is one of India's leading career counseling platforms, helping students to discover career paths suited to their interests.",
    link: "https://idreamcareer.com/blog/career-options-in-science/",
    image: "https://www.shutterstock.com/shutterstock/photos/2509001103/display_1500/stock-photo-indoor-photo-of-a-multi-cultural-high-school-student-working-in-a-career-technical-classroom-2509001103.jpg"
  },
  {
    name: "CareerGuide",
    description: "CareerGuide provides comprehensive career guidance to students and professionals to help them make informed career decisions.",
    link: "https://www.careerguide.com/",
    image: "https://img.freepik.com/free-photo/3d-cartoon-scene-depicting-variety-people-multitasking_23-2151294577.jpg?t=st=1726480861~exp=1726484461~hmac=657bea4b12bc0eff042c9a0bd7f717b856774bd4b795adefa09f5c68fc623b5f&w=740"
  }
];

const technologyResources = [
  {
    name: "Mindler",
    description: "Mindler offers expert career guidance, career counseling, and career assessment to help students in choosing the right career path.",
    link: "https://www.mindler.com/",
    image: "https://img.freepik.com/free-vector/programmer-doing-his-job-office_23-2148274928.jpg?w=740&t=st=1726480908~exp=1726481508~hmac=fec602e0e6e0e0141ba9c044ddb94454e22df683cfe22ee995b76858544d5c8a"
  },
  {
    name: "Geekflare",
    description: "Geekflare provides guides, tutorials, and reviews on the latest tech, cloud computing, and cybersecurity.",
    link: "https://geekflare.com/",
    image: "https://img.freepik.com/premium-photo/two-robots-dark-room-with-one-them-looking-laptop_1274269-86179.jpg?w=1380"
  }
];

const engineeringResources = [
  {
    name: "Engineer4Free",
    description: "Engineer4Free offers free engineering tutorials, covering topics such as structural analysis, mechanics, and more.",
    link: "https://www.engineer4free.com/",
    image: "https://example.com/engineer4free.jpg"
  },
  {
    name: "Coursera - Engineering",
    description: "Coursera provides online courses from top universities in engineering fields, helping students gain skills for their career.",
    link: "https://www.coursera.org/courses?query=engineering",
    image: "https://example.com/coursera-engineering.jpg"
  }
];

const mathematicsResources = [
  {
    name: "Brilliant",
    description: "Brilliant offers interactive learning for mathematics and logic, helping students to build problem-solving skills.",
    link: "https://brilliant.org/",
    image: "https://example.com/brilliant-mathematics.jpg"
  },
  {
    name: "Khan Academy - Math",
    description: "Khan Academy provides free educational resources and tutorials on mathematics, from basic arithmetic to calculus.",
    link: "https://www.khanacademy.org/math",
    image: "https://example.com/khanacademy-math.jpg"
  }
];

const medicalResources = [
  {
    name: "Prepladder",
    description: "Prepladder offers comprehensive preparation resources for medical exams and guides for medical students.",
    link: "https://www.prepladder.com/",
    image: "https://example.com/prepladder-medical.jpg"
  },
  {
    name: "Amboss",
    description: "Amboss provides medical learning resources, from clinical cases to medical theory, helping students to excel in their studies.",
    link: "https://www.amboss.com/",
    image: "https://example.com/amboss-medical.jpg"
  }
];

  
  const Careerguides = () => {
    
    return (
      <div>
        <h1 className="justify-center flex text-xl m-4 font-bold">Conventional</h1>
        <h2 className="justify-start flex mx-4 text-lg font-semibold">Science</h2>
        <div className="">
          <ul className="h-auto w-full flex flex-row gap-2 px-2 ">
            {scienceResources.map((item)=>{return <Titlecard item={item}/>})}
          </ul>
          <h2 className="justify-start flex mx-4 text-lg font-semibold">Technology</h2>
          <ul className="flex flex-row gap-2 ">
            {technologyResources.map((item)=>{return <Titlecard item={item}/>})}
          </ul>
          <h2 className="justify-start flex mx-4 text-lg font-semibold">Engineering</h2>
          <ul className="flex flex-row gap-2 ">
            {engineeringResources.map((item)=>{return <Titlecard item={item}/>})}
          </ul>
        </div>
      </div>
    );
  };
  

export default Careerguides;