import { useState } from "react";
import Titlecard from "./dropdown/titlecard";

const schoolResources = [
    {
        name: "National Institute of Open Schooling (NIOS)",
        description:
            "NIOS offers a flexible education system at school level, from primary to pre-degree level, including secondary and senior secondary education.",
        link: "https://www.nios.ac.in/",
        image: "https://example.com/nios.jpg",
    },
    {
        name: "Khan Academy - School Education",
        description:
            "Khan Academy provides free resources covering subjects like math, science, and more, helping students through their school education journey.",
        link: "https://www.khanacademy.org/",
        image: "https://example.com/khanacademy-school.jpg",
    },
];

const higherEducationResources = [
    {
        name: "Study Abroad",
        description:
            "Study Abroad offers guidance for students looking to pursue their higher education in universities worldwide, including visa processes and scholarships.",
        link: "https://www.studyabroad.com/",
        image: "https://example.com/study-abroad.jpg",
    },
    {
        name: "Coursera - Higher Education",
        description:
            "Coursera partners with universities to offer online degrees and courses that help students pursue higher education from anywhere in the world.",
        link: "https://www.coursera.org/degrees",
        image: "https://example.com/coursera-higher-education.jpg",
    },
];

const vocationalEducationResources = [
    {
        name: "NSDC - Vocational Training",
        description:
            "National Skill Development Corporation (NSDC) offers vocational training programs across various industries, helping students gain industry-relevant skills.",
        link: "https://nsdcindia.org/",
        image: "https://example.com/nsdc-vocational.jpg",
    },
    {
        name: "Skillshare - Vocational Learning",
        description:
            "Skillshare offers a range of vocational courses like design, technology, and business to help learners develop practical skills.",
        link: "https://www.skillshare.com/",
        image: "https://example.com/skillshare-vocational.jpg",
    },
];

const Edupathways = () => {
    return (
        <div>
            <h1 className="justify-center flex text-xl m-4 font-bold">
                Education Pathways
            </h1>

            <h2 className="justify-start flex mx-4 text-lg font-semibold">
                School Education
            </h2>
            <div>
                <ul className="h-auto w-full flex flex-row gap-2 px-2">
                    {schoolResources.map((item) => {
                        return <Titlecard item={item} />;
                    })}
                </ul>

                <h2 className="justify-start flex mx-4 text-lg font-semibold">
                    Higher Education
                </h2>
                <ul className="flex flex-row gap-2">
                    {higherEducationResources.map((item) => {
                        return <Titlecard item={item} />;
                    })}
                </ul>

                <h2 className="justify-start flex mx-4 text-lg font-semibold">
                    Vocational Education
                </h2>
                <ul className="flex flex-row gap-2">
                    {vocationalEducationResources.map((item) => {
                        return <Titlecard item={item} />;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Edupathways;
