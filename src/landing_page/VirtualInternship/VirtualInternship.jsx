// import React from "react";
// import { Pie } from "react-chartjs-2"; // for mathematical visuals

// const data = {
//   labels: ['IT', 'Marketing', 'Finance', 'Education', 'Design'],
//   datasets: [{
//     data: [35, 25, 20, 10, 10],
//     backgroundColor: ['#4F46E5', '#FBBF24', '#EF4444', '#10B981', '#3B82F6'],
//   }]
// };

// const VirtualInternships = () => {
//   return (
//     <section className="bg-gray-100 py-12 px-6">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-extrabold text-gray-800">
//           Virtual Internships in Career Counseling
//         </h2>
//         <p className="mt-4 text-lg text-gray-600">
//           Explore internships that align with your career goals and gain experience in your field of interest.
//         </p>
//       </div>

//       {/* Career-focused Internship Recommendations */}
//       <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
//         <h3 className="text-2xl font-semibold text-center mb-6">
//           Recommended Internships Based on Your Career Path
//         </h3>
//         <div className="flex flex-wrap justify-center gap-6">
//           {["Software Development", "Marketing Analyst", "Finance Trainee", "Content Writing", "Graphic Design"].map((career, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 p-6 rounded-lg shadow-md w-72 transform transition-transform duration-300 hover:scale-105"
//             >
//               <h4 className="text-lg font-semibold mb-3">{career} Internship</h4>
//               <p className="text-gray-600">
//                 Gain hands-on experience in {career.toLowerCase()} to enhance your career prospects in the {career.split(" ")[0]} industry.
//               </p>
//               <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
//                 Apply Now
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Internship Benefits in Sliding Cards */}
//       <div className="flex overflow-x-auto space-x-4 pb-6">
//         {["Career Growth", "Industry Connections", "Real-World Experience", "Mentorship", "Flexible Learning"].map((benefit, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg shadow-lg p-6 w-80 flex-shrink-0 transform transition-transform duration-300 hover:scale-105"
//           >
//             <h3 className="text-xl font-semibold mb-4">{benefit}</h3>
//             <p className="text-gray-600">
//               {benefit === "Career Growth" && "Virtual internships help you transition from student to professional by gaining practical experience."}
//               {benefit === "Industry Connections" && "Build a network with professionals and mentors in your chosen field."}
//               {benefit === "Real-World Experience" && "Work on actual projects, giving you real-world insights into your future career."}
//               {benefit === "Mentorship" && "Get guidance from seasoned professionals who can help shape your career path."}
//               {benefit === "Flexible Learning" && "Work at your own pace while still achieving professional development goals."}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Mathematical Data Visualization */}
//       <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
//         <h3 className="text-2xl font-semibold text-center mb-6">Internship Opportunities by Field</h3>
//         <div className="max-w-md mx-auto">
//           <Pie data={data} />
//         </div>
//         <p className="text-center text-gray-600 mt-4">
//           See which fields have the most internship opportunities available. Choose an area of interest that matches your career aspirations.
//         </p>
//       </div>

//       {/* How Virtual Internships Help in Career Development */}
//       <div className="bg-gray-50 mt-12 p-6 rounded-lg shadow-lg">
//         <h3 className="text-2xl font-semibold mb-4">How Virtual Internships Shape Your Career</h3>
//         <p className="text-gray-600 mb-4">
//           Virtual internships are a stepping stone in building your professional journey. They provide real-world experience, help you explore various fields, and equip you with the skills needed to succeed in your chosen career.
//         </p>
//         <ul className="list-disc list-inside text-gray-600">
//           <li>Explore career paths and industries that align with your strengths and interests.</li>
//           <li>Enhance your resume with relevant, real-world experience.</li>
//           <li>Build a professional network to support your long-term career growth.</li>
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default VirtualInternships;
//.................................................
// import React from "react";
// import { Pie } from "react-chartjs-2"; // For mathematical visuals
// import { motion } from "framer-motion"; // For animations
// import { useSwipeable } from "react-swipeable"; // For swipe functionality

// const data = {
//   labels: ['IT', 'Marketing', 'Finance', 'Education', 'Design'],
//   datasets: [{
//     data: [35, 25, 20, 10, 10],
//     backgroundColor: ['#38B2AC', '#ED8936', '#E53E3E', '#48BB78', '#4299E1'],
//   }]
// };

// const VirtualInternships = () => {
//   // Swipeable handlers for sliding cards
//   const swipeHandlers = useSwipeable({
//     onSwipedLeft: () => handleSwipe("left"),
//     onSwipedRight: () => handleSwipe("right"),
//     preventDefaultTouchmoveEvent: true,
//     trackMouse: true,
//   });

//   const handleSwipe = (direction) => {
//     // Implement swipe logic here
//     console.log(`Swiped ${direction}`);
//   };

//   return (
//     <section className="bg-indigo-50 py-12 px-6">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl font-extrabold text-indigo-800"
//         >
//           Virtual Internships in Career Counseling
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="mt-4 text-lg text-indigo-600"
//         >
//           Explore internships that align with your career goals and gain experience in your field of interest.
//         </motion.p>
//       </div>

//       {/* Career-focused Internship Recommendations */}
//       <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
//         <h3 className="text-2xl font-semibold text-center mb-6 text-teal-600">
//           Recommended Internships Based on Your Career Path
//         </h3>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="flex flex-wrap justify-center gap-6"
//         >
//           {["Software Development", "Marketing Analyst", "Finance Trainee", "Content Writing", "Graphic Design"].map((career, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               className="bg-indigo-100 p-6 rounded-lg shadow-md w-72"
//             >
//               <h4 className="text-lg font-semibold mb-3 text-teal-700">{career} Internship</h4>
//               <p className="text-indigo-700">
//                 Gain hands-on experience in {career.toLowerCase()} to enhance your career prospects in the {career.split(" ")[0]} industry.
//               </p>
//               <button className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600">
//                 Apply Now
//               </button>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Internship Benefits in Sliding Cards */}
//       <div {...swipeHandlers} className="flex overflow-x-auto space-x-4 pb-6">
//         {["Career Growth", "Industry Connections", "Real-World Experience", "Mentorship", "Flexible Learning"].map((benefit, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//             className="bg-white rounded-lg shadow-lg p-6 w-80 flex-shrink-0 transform transition-transform duration-300"
//           >
//             <h3 className="text-xl font-semibold mb-4 text-indigo-600">{benefit}</h3>
//             <p className="text-indigo-600">
//               {benefit === "Career Growth" && "Virtual internships help you transition from student to professional by gaining practical experience."}
//               {benefit === "Industry Connections" && "Build a network with professionals and mentors in your chosen field."}
//               {benefit === "Real-World Experience" && "Work on actual projects, giving you real-world insights into your future career."}
//               {benefit === "Mentorship" && "Get guidance from seasoned professionals who can help shape your career path."}
//               {benefit === "Flexible Learning" && "Work at your own pace while still achieving professional development goals."}
//             </p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Mathematical Data Visualization */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white rounded-lg shadow-lg p-8 mt-12"
//       >
//         <h3 className="text-2xl font-semibold text-center mb-6 text-teal-700">Internship Opportunities by Field</h3>
//         <div className="max-w-md mx-auto">
//           <Pie data={data} />
//         </div>
//         <p className="text-center text-indigo-600 mt-4">
//           See which fields have the most internship opportunities available. Choose an area of interest that matches your career aspirations.
//         </p>
//       </motion.div>

//       {/* How Virtual Internships Help in Career Development */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="bg-indigo-100 mt-12 p-6 rounded-lg shadow-lg"
//       >
//         <h3 className="text-2xl font-semibold mb-4 text-teal-600">How Virtual Internships Shape Your Career</h3>
//         <p className="text-indigo-600 mb-4">
//           Virtual internships are a stepping stone in building your professional journey. They provide real-world experience, help you explore various fields, and equip you with the skills needed to succeed in your chosen career.
//         </p>
//         <ul className="list-disc list-inside text-indigo-600">
//           <li>Explore career paths and industries that align with your strengths and interests.</li>
//           <li>Enhance your resume with relevant, real-world experience.</li>
//           <li>Build a professional network to support your long-term career growth.</li>
//         </ul>
//       </motion.div>
//     </section>
//   );
// };

// export default VirtualInternships;
//...................................................
import React from "react";
import { Pie, Bar } from "react-chartjs-2"; // Pie and Bar charts for visual representation

const internshipData = {
    labels: ["IT", "Marketing", "Finance", "Education", "Design"],
    datasets: [
        {
            data: [35, 25, 20, 10, 10],
            backgroundColor: [
                "#38B2AC",
                "#ED8936",
                "#E53E3E",
                "#48BB78",
                "#4299E1",
            ],
        },
    ],
};

const skillImprovementData = {
    labels: [
        "Communication",
        "Problem-Solving",
        "Technical Skills",
        "Teamwork",
        "Creativity",
    ],
    datasets: [
        {
            label: "Skill Improvement through Internships (%)",
            data: [80, 75, 90, 65, 85],
            backgroundColor: "#48BB78",
        },
    ],
};

const VirtualInternships = () => {
    return (
        <section className="bg-indigo-50 py-12 px-6">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-indigo-800">
                    Virtual Internships in Career Counseling
                </h2>
                <p className="mt-4 text-lg text-indigo-600">
                    Explore internships that align with your career goals and
                    gain experience in your field of interest.
                </p>
            </div>

            {/* Career-focused Internship Recommendations */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                <h3 className="text-2xl font-semibold text-center mb-6 text-teal-600">
                    Recommended Internships Based on Your Career Path
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                    {[
                        "Software Development",
                        "Marketing Analyst",
                        "Finance Trainee",
                        "Content Writing",
                        "Graphic Design",
                    ].map((career, index) => (
                        <div
                            key={index}
                            className="bg-indigo-100 p-6 rounded-lg shadow-md w-72 transform transition-transform duration-300 hover:scale-105"
                        >
                            <h4 className="text-lg font-semibold mb-3 text-teal-700">
                                {career} Internship
                            </h4>
                            <p className="text-indigo-700">
                                Gain hands-on experience in{" "}
                                {career.toLowerCase()} to enhance your career
                                prospects in the {career.split(" ")[0]}{" "}
                                industry.
                            </p>
                            <button className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Internship Benefits in Sliding Cards */}
            <div className="flex overflow-x-auto space-x-4 pb-6">
                {[
                    "Career Growth",
                    "Industry Connections",
                    "Real-World Experience",
                    "Mentorship",
                    "Flexible Learning",
                ].map((benefit, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg p-6 w-80 flex-shrink-0 transform transition-transform duration-300 hover:scale-105"
                    >
                        <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                            {benefit}
                        </h3>
                        <p className="text-indigo-600">
                            {benefit === "Career Growth" &&
                                "Virtual internships help you transition from student to professional by gaining practical experience."}
                            {benefit === "Industry Connections" &&
                                "Build a network with professionals and mentors in your chosen field."}
                            {benefit === "Real-World Experience" &&
                                "Work on actual projects, giving you real-world insights into your future career."}
                            {benefit === "Mentorship" &&
                                "Get guidance from seasoned professionals who can help shape your career path."}
                            {benefit === "Flexible Learning" &&
                                "Work at your own pace while still achieving professional development goals."}
                        </p>
                    </div>
                ))}
            </div>

            {/* Pie Chart Visualization */}
            <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
                <h3 className="text-2xl font-semibold text-center mb-6 text-teal-700">
                    Internship Opportunities by Field
                </h3>
                <div className="max-w-md mx-auto">
                    <Pie data={internshipData} />
                </div>
                <p className="text-center text-indigo-600 mt-4">
                    See which fields have the most internship opportunities
                    available. Choose an area of interest that matches your
                    career aspirations.
                </p>
            </div>

            {/* Bar Chart - Skill Improvement */}
            <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
                <h3 className="text-2xl font-semibold text-center mb-6 text-teal-700">
                    Skill Improvement through Internships
                </h3>
                <div className="max-w-md mx-auto">
                    <Bar data={skillImprovementData} />
                </div>
                <p className="text-center text-indigo-600 mt-4">
                    Internships significantly improve critical skills required
                    in professional environments, from technical skills to
                    creativity.
                </p>
            </div>

            {/* How Virtual Internships Help in Career Development */}
            <div className="bg-indigo-100 mt-12 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-teal-600">
                    How Virtual Internships Shape Your Career
                </h3>
                <p className="text-indigo-600 mb-4">
                    Virtual internships are a stepping stone in building your
                    professional journey. They provide real-world experience,
                    help you explore various fields, and equip you with the
                    skills needed to succeed in your chosen career.
                </p>
                <ul className="list-disc list-inside text-indigo-600">
                    <li>
                        Explore career paths and industries that align with your
                        strengths and interests.
                    </li>
                    <li>
                        Enhance your resume with relevant, real-world
                        experience.
                    </li>
                    <li>
                        Build a professional network to support your long-term
                        career growth.
                    </li>
                    <li>
                        Access flexible learning environments where you can gain
                        knowledge at your own pace.
                    </li>
                </ul>
            </div>

            {/* Benefits of Virtual Internships */}
            <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
                <h3 className="text-2xl font-semibold text-center mb-6 text-teal-700">
                    Benefits of Virtual Internships
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                    <div className="bg-indigo-100 p-6 rounded-lg shadow-md w-72 transform transition-transform duration-300 hover:scale-105">
                        <h4 className="text-lg font-semibold mb-3 text-teal-700">
                            Industry Experience
                        </h4>
                        <p className="text-indigo-700">
                            Working on real-world projects that align with your
                            career goals is the fastest way to gain valuable
                            experience.
                        </p>
                    </div>
                    <div className="bg-indigo-100 p-6 rounded-lg shadow-md w-72 transform transition-transform duration-300 hover:scale-105">
                        <h4 className="text-lg font-semibold mb-3 text-teal-700">
                            Networking
                        </h4>
                        <p className="text-indigo-700">
                            Connect with professionals, mentors, and peers in
                            your industry, helping you secure future job
                            opportunities.
                        </p>
                    </div>
                    <div className="bg-indigo-100 p-6 rounded-lg shadow-md w-72 transform transition-transform duration-300 hover:scale-105">
                        <h4 className="text-lg font-semibold mb-3 text-teal-700">
                            Flexibility
                        </h4>
                        <p className="text-indigo-700">
                            Work from anywhere at your own pace, offering
                            flexibility while still acquiring essential skills.
                        </p>
                    </div>
                </div>
            </div>

            {/* Internship Progress Tracker */}
            <div className="bg-indigo-100 mt-12 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-teal-600">
                    Your Internship Progress
                </h3>
                <div className="relative pt-1">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Software Development Internship
                    </label>
                    <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-indigo-200">
                        <div
                            style={{ width: "75%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                        ></div>
                    </div>

                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Marketing Analyst Internship
                    </label>
                    <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-indigo-200">
                        <div
                            style={{ width: "50%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                        ></div>
                    </div>

                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Graphic Design Internship
                    </label>
                    <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-indigo-200">
                        <div
                            style={{ width: "90%" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VirtualInternships;

// src/components/VirtualInternships.js
// import React, { useState, useEffect } from 'react';

// const VirtualInternships = () => {
//   const [internships, setInternships] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/internships')
//       .then(response => response.json())
//       .then(data => setInternships(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <section className="bg-indigo-50 py-12 px-6">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-extrabold text-indigo-800">
//           Virtual Internships in Career Counseling
//         </h2>
//       </div>

//       {/* Internship Recommendations */}
//       <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
//         <h3 className="text-2xl font-semibold text-center mb-6 text-teal-600">
//           Recommended Internships Based on Your Career Path
//         </h3>
//         <div className="flex flex-wrap justify-center gap-6">
//           {internships.map((internship, index) => (
//             <div key={index} className="bg-indigo-100 p-6 rounded-lg shadow-md w-72">
//               <h4 className="text-lg font-semibold mb-3 text-teal-700">
//                 {internship.title}
//               </h4>
//               <p className="text-indigo-700">
//                 {internship.description}
//               </p>
//               <button className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-md">
//                 <a href={internship.applyLink} target="_blank" rel="noopener noreferrer">
//                   Apply Now
//                 </a>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VirtualInternships;
