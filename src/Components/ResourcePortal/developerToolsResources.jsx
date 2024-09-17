import { useState } from "react";
import Titlecard from "./dropdown/titlecard";

const scienceResources = [
    // Your existing science resources
    {
        name: "Kaggle",
        description:
            "Kaggle offers datasets and competitions for data science and machine learning, helping developers practice and enhance their skills.",
        link: "https://www.kaggle.com/",
        image: "https://www.kaggle.com/static/images/site-logo.png",
    },
    {
        name: "DataCamp",
        description:
            "DataCamp provides interactive courses on data science, machine learning, and programming with Python, R, and SQL.",
        link: "https://www.datacamp.com/",
        image: "https://example.com/datacamp.jpg",
    },
    {
        name: "Coursera - Data Science",
        description:
            "Coursera offers a variety of courses on data science, helping developers and scientists learn new skills and enhance their careers.",
        link: "https://www.coursera.org/courses?query=data%20science",
        image: "https://example.com/coursera-data-science.jpg",
    },
];

const technologyResources = [
    // Your existing technology resources
    {
        name: "Stack Overflow",
        description:
            "Stack Overflow is a community-driven Q&A platform that helps developers find solutions to coding issues and enhance their skills.",
        link: "https://stackoverflow.com/",
        image: "https://example.com/stackoverflow.jpg",
    },
    {
        name: "Mozilla Developer Network (MDN)",
        description:
            "MDN Web Docs provides extensive documentation on HTML, CSS, JavaScript, and other web technologies, making it a go-to resource for developers.",
        link: "https://developer.mozilla.org/",
        image: "https://example.com/mdn.jpg",
    },
    {
        name: "W3Schools",
        description:
            "W3Schools is a web developer's site, providing tutorials and references on web development languages such as HTML, CSS, JavaScript, and more.",
        link: "https://www.w3schools.com/",
        image: "https://example.com/w3schools.jpg",
    },
];

const engineeringResources = [
    // Your existing engineering resources
    {
        name: "Engineer4Free",
        description:
            "Engineer4Free offers free engineering tutorials, covering topics such as structural analysis, mechanics, and more, ideal for software engineers learning the basics of applied sciences.",
        link: "https://www.engineer4free.com/",
        image: "https://example.com/engineer4free.jpg",
    },
    {
        name: "Coursera - Engineering",
        description:
            "Coursera provides online courses from top universities in engineering fields, helping software engineers gain skills related to fields like electrical and mechanical engineering.",
        link: "https://www.coursera.org/courses?query=engineering",
        image: "https://example.com/coursera-engineering.jpg",
    },
    {
        name: "MIT OpenCourseWare - Engineering",
        description:
            "MIT OpenCourseWare provides free courses and resources on a wide range of engineering topics, making it an ideal resource for developers interested in embedded systems and robotics.",
        link: "https://ocw.mit.edu/courses/engineering/",
        image: "https://example.com/mit-opencourseware.jpg",
    },
];

const developerToolsResources = () => {
    return (
        <div>
            <h1 className="justify-center flex text-xl m-4 font-bold">
                Conventional
            </h1>

            <h2 className="justify-start flex mx-4 text-lg font-semibold">
                Science
            </h2>
            <ul className="h-auto w-full flex flex-row gap-2 px-2">
                {scienceResources.map((item) => (
                    <Titlecard item={item} />
                ))}
            </ul>

            <h2 className="justify-start flex mx-4 text-lg font-semibold">
                Technology
            </h2>
            <ul className="flex flex-row gap-2">
                {technologyResources.map((item) => (
                    <Titlecard item={item} />
                ))}
            </ul>

            <h2 className="justify-start flex mx-4 text-lg font-semibold">
                Engineering
            </h2>
            <ul className="flex flex-row gap-2">
                {engineeringResources.map((item) => (
                    <Titlecard item={item} />
                ))}
            </ul>
        </div>
    );
};

export default developerToolsResources;
