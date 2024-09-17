import { useState } from "react";
import Titlecard from "./dropdown/titlecard";

const technicalSkillsResources = [
    {
        name: "Codecademy",
        description:
            "Codecademy offers interactive coding lessons in various programming languages like Python, JavaScript, and HTML to enhance technical skills.",
        link: "https://www.codecademy.com/",
        image: "https://example.com/codecademy.jpg",
    },
    {
        name: "freeCodeCamp",
        description:
            "freeCodeCamp provides free coding tutorials and certifications in web development, data science, and machine learning.",
        link: "https://www.freecodecamp.org/",
        image: "https://example.com/freecodecamp.jpg",
    },
];

const softSkillsResources = [
    {
        name: "Coursera - Soft Skills",
        description:
            "Coursera offers courses on soft skills like communication, teamwork, and leadership, helping professionals improve their interpersonal abilities.",
        link: "https://www.coursera.org/courses?query=soft%20skills",
        image: "https://example.com/coursera-soft-skills.jpg",
    },
    {
        name: "LinkedIn Learning",
        description:
            "LinkedIn Learning provides courses to develop essential soft skills such as negotiation, emotional intelligence, and time management.",
        link: "https://www.linkedin.com/learning/",
        image: "https://example.com/linkedin-learning-soft-skills.jpg",
    },
];

const creativeSkillsResources = [
    {
        name: "Skillshare - Creative",
        description:
            "Skillshare offers courses in creative skills like design, photography, and illustration, helping learners master their creative potential.",
        link: "https://www.skillshare.com/browse/creative",
        image: "https://example.com/skillshare-creative.jpg",
    },
    {
        name: "Udemy - Creative Arts",
        description:
            "Udemy provides a wide variety of creative courses, ranging from graphic design to video production, suitable for all skill levels.",
        link: "https://www.udemy.com/courses/design/",
        image: "https://example.com/udemy-creative.jpg",
    },
];

const skills = () => {
    return (
        <div>
            <h1 className="justify-center flex text-xl m-4 font-bold">
                Skills Development
            </h1>

            <h2 className="justify-start flex mx-4 text-lg font-semibold">
                Technical Skills
            </h2>
            <div>
                <ul className="h-auto w-full flex flex-row gap-2 px-2">
                    {technicalSkillsResources.map((item) => {
                        return <Titlecard item={item} />;
                    })}
                </ul>

                <h2 className="justify-start flex mx-4 text-lg font-semibold">
                    Soft Skills
                </h2>
                <ul className="flex flex-row gap-2">
                    {softSkillsResources.map((item) => {
                        return <Titlecard item={item} />;
                    })}
                </ul>

                <h2 className="justify-start flex mx-4 text-lg font-semibold">
                    Creative Skills
                </h2>
                <ul className="flex flex-row gap-2">
                    {creativeSkillsResources.map((item) => {
                        return <Titlecard item={item} />;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default skills;
