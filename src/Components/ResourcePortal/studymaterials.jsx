import { useState } from "react";
import Titlecard from "./dropdown/titlecard";

const scienceStudyMaterials = [
    {
        name: "Khan Academy - Science",
        description:
            "Khan Academy offers free resources and lessons on a wide range of science subjects including physics, chemistry, and biology.",
        link: "https://www.khanacademy.org/science",
        image: "https://example.com/khanacademy-science.jpg",
    },
    {
        name: "CrashCourse",
        description:
            "CrashCourse provides engaging educational videos on science topics like chemistry, biology, and astronomy.",
        link: "https://www.youtube.com/user/crashcourse",
        image: "https://example.com/crashcourse-science.jpg",
    },
];

const mathematicsStudyMaterials = [
    {
        name: "Brilliant - Math",
        description:
            "Brilliant offers interactive lessons in mathematics, ranging from algebra to calculus, to improve problem-solving skills.",
        link: "https://brilliant.org/math/",
        image: "https://example.com/brilliant-math.jpg",
    },
    {
        name: "Paul's Online Math Notes",
        description:
            "Comprehensive math notes and tutorials covering topics such as calculus, linear algebra, and differential equations.",
        link: "https://tutorial.math.lamar.edu/",
        image: "https://example.com/pauls-math-notes.jpg",
    },
];

const humanitiesStudyMaterials = [
    {
        name: "Coursera - Humanities",
        description:
            "Coursera provides online courses in humanities fields like history, literature, and philosophy from top universities.",
        link: "https://www.coursera.org/browse/arts-and-humanities",
        image: "https://example.com/coursera-humanities.jpg",
    },
    {
        name: "edX - Humanities",
        description:
            "edX offers free courses and certificates in humanities subjects such as art history, literature, and cultural studies.",
        link: "https://www.edx.org/learn/humanities",
        image: "https://example.com/edx-humanities.jpg",
    },
];

const studymaterials = () => {
    return (
        <div>
            <h1 className="justify-center flex text-xl m-4 font-bold">
                Study Materials
            </h1>

            <h2 className="justify-start flex mx-4 text-lg font-semibold">
                Science
            </h2>
            <div>
                <ul className="h-auto w-full flex flex-row gap-2 px-2">
                    {scienceStudyMaterials.map((item) => {
                        return <Titlecard item={item} />;
                    })}
                </ul>

                <h2 className="justify-start flex mx-4 text-lg font-semibold">
                    Mathematics
                </h2>
                <ul className="flex flex-row gap-2">
                    {mathematicsStudyMaterials.map((item) => {
                        return <Titlecard item={item} />;
                    })}
                </ul>

                <h2 className="justify-start flex mx-4 text-lg font-semibold">
                    Humanities
                </h2>
                <ul className="flex flex-row gap-2">
                    {humanitiesStudyMaterials.map((item) => {
                        return <Titlecard item={item} />;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default studymaterials;
