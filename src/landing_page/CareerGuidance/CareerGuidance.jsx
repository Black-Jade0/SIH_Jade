// import React from 'react';

// const CC = () => {
//   return (
//     <div className="container mx-auto px-4">
//       {/* Hero Section */}
//       <section className="text-center py-16 bg-gradient-to-r from-blue-200 via-blue-600 to-blue-700 text-white">
//         <h1 className="text-5xl font-bold animate-fadeIn">Empowering Students Through Career Guidance</h1>
//         <p className="mt-4 text-lg animate-bounceIn">Helping students make informed decisions about their futures</p>
//         <button className="mt-8 bg-white text-blue-600 py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg">
//           Get Started
//         </button>
//       </section>

//       {/* Career Counseling Features */}
//       <section className="py-16">
//         <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Career Counseling Services</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
//           {/* Service Card */}
//           <div className="p-6 bg-white shadow-lg hover:shadow-xl rounded transform hover:scale-105 transition duration-300">
//             <h3 className="text-xl font-bold text-blue-600">One-on-One Sessions</h3>
//             <p className="mt-2 text-gray-600">Personalized career guidance tailored to individual needs.</p>
//             <span className="inline-block bg-blue-100 text-blue-600 mt-4 py-1 px-3 rounded-full font-semibold">Learn More</span>
//           </div>
//           <div className="p-6 bg-white shadow-lg hover:shadow-xl rounded transform hover:scale-105 transition duration-300">
//             <h3 className="text-xl font-bold text-blue-600">Workshops & Webinars</h3>
//             <p className="mt-2 text-gray-600">Interactive sessions to explore career options.</p>
//             <span className="inline-block bg-blue-100 text-blue-600 mt-4 py-1 px-3 rounded-full font-semibold">Join Now</span>
//           </div>
//           <div className="p-6 bg-white shadow-lg hover:shadow-xl rounded transform hover:scale-105 transition duration-300">
//             <h3 className="text-xl font-bold text-blue-600">Career Assessments</h3>
//             <p className="mt-2 text-gray-600">Evaluate your strengths and find the right career path.</p>
//             <span className="inline-block bg-blue-100 text-blue-600 mt-4 py-1 px-3 rounded-full font-semibold">Take Test</span>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-16 bg-gray-100">
//         <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">What Students Are Saying</h2>
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-white p-6 rounded shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
//             <p className="text-lg italic">"The career counseling sessions helped me realize my true potential and guided me toward my dream career!"</p>
//             <p className="mt-4 text-blue-600 font-semibold">- Jane Doe, Senior</p>
//           </div>
//         </div>
//       </section>

//       {/* Upcoming Events */}
//       <section className="py-16">
//         <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Upcoming Events</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
//           {/* Event Card */}
//           <div className="p-6 bg-white shadow-lg hover:shadow-2xl rounded transform hover:scale-105 transition duration-300">
//             <h3 className="text-xl font-bold text-green-600">Career Fair</h3>
//             <p className="mt-2 text-gray-600">Join us for our annual career fair where top companies are recruiting.</p>
//             <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300">Register</button>
//           </div>
//           {/* Repeat for other events */}
//           <div className="p-6 bg-white shadow-lg hover:shadow-2xl rounded transform hover:scale-105 transition duration-300">
//             <h3 className="text-xl font-bold text-green-600">Resume Workshop</h3>
//             <p className="mt-2 text-gray-600">Learn how to build a winning resume from top industry professionals.</p>
//             <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300">Join</button>
//           </div>
//           <div className="p-6 bg-white shadow-lg hover:shadow-2xl rounded transform hover:scale-105 transition duration-300">
//             <h3 className="text-xl font-bold text-green-600">Interview Skills</h3>
//             <p className="mt-2 text-gray-600">Master your interview skills and ace your next job interview.</p>
//             <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300">Register</button>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form */}
//       <section className="py-16 bg-gray-100">
//         <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact a Counselor</h2>
//         <form className="max-w-lg mx-auto mt-8 space-y-4">
//           <input type="text" placeholder="Your Name" className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300" />
//           <input type="text" placeholder="Grade" className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300" />
//           <textarea placeholder="Message" className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"></textarea>
//           <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 transform hover:scale-105">Submit</button>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default CC;
import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CareerGuidance = () => {
    // Data for Pie Chart
    const pieData = {
        labels: ["Engineering", "Medical", "Arts", "Commerce"],
        datasets: [
            {
                label: "Career Choices",
                data: [30, 20, 25, 25],
                backgroundColor: ["#4CAF50", "#FF6384", "#36A2EB", "#FFCE56"],
            },
        ],
    };

    // Data for Bar Chart
    const barData = {
        labels: ["2020", "2021", "2022", "2023"],
        datasets: [
            {
                label: "Students Guided",
                backgroundColor: "#42A5F5",
                data: [500, 600, 750, 800],
            },
        ],
    };

    return (
        <div className="container mx-auto px-4">
            {/* Hero Section */}
            <section className="text-center py-16 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white">
                <h1 className="text-5xl font-bold animate-fadeIn">
                    Empowering Students Through Career Guidance
                </h1>
                <p className="mt-4 text-lg animate-bounceIn">
                    Helping students make informed decisions about their futures
                </p>
                <button className="mt-8 bg-white text-blue-600 py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg">
                    Get Started
                </button>
            </section>

            {/* Career Counseling Features */}
            <section className="py-16">
                <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
                    Our Career Counseling Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    <div className="p-6 bg-white shadow-lg hover:shadow-xl rounded transform hover:scale-105 transition duration-300">
                        <h3 className="text-xl font-bold text-blue-600">
                            One-on-One Sessions
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Personalized career guidance tailored to individual
                            needs.
                        </p>
                        <CircularProgressbar
                            value={75}
                            text={`${75}%`}
                            styles={buildStyles({
                                textColor: "#000",
                                pathColor: "#4CAF50",
                                trailColor: "#d6d6d6",
                            })}
                        />
                    </div>

                    <div className="p-6 bg-white shadow-lg hover:shadow-xl rounded transform hover:scale-105 transition duration-300">
                        <h3 className="text-xl font-bold text-blue-600">
                            Workshops & Webinars
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Interactive sessions to explore career options.
                        </p>
                        <CircularProgressbar
                            value={60}
                            text={`${60}%`}
                            styles={buildStyles({
                                textColor: "#000",
                                pathColor: "#36A2EB",
                                trailColor: "#d6d6d6",
                            })}
                        />
                    </div>

                    <div className="p-6 bg-white shadow-lg hover:shadow-xl rounded transform hover:scale-105 transition duration-300">
                        <h3 className="text-xl font-bold text-blue-600">
                            Career Assessments
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Evaluate your strengths and find the right career
                            path.
                        </p>
                        <CircularProgressbar
                            value={90}
                            text={`${90}%`}
                            styles={buildStyles({
                                textColor: "#000",
                                pathColor: "#FFCE56",
                                trailColor: "#d6d6d6",
                            })}
                        />
                    </div>
                </div>
            </section>

            {/* Career Choice Distribution Pie Chart */}
            <section className="py-16 bg-gray-100">
                <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
                    Career Choices Distribution
                </h2>
                <div className="max-w-md mx-auto">
                    <Pie data={pieData} />
                </div>
            </section>

            {/* Growth in Students Guided */}
            <section className="py-16">
                <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
                    Growth in Students Guided
                </h2>
                <div className="max-w-lg mx-auto">
                    <Bar data={barData} />
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-16 bg-gray-100">
                <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
                    Contact a Counselor
                </h2>
                <form className="max-w-lg mx-auto mt-8 space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
                    />
                    <input
                        type="text"
                        placeholder="Grade"
                        className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
                    />
                    <textarea
                        placeholder="Message"
                        className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
                    ></textarea>
                    <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 transform hover:scale-105">
                        Submit
                    </button>
                </form>
            </section>
        </div>
    );
};

export default CareerGuidance;
