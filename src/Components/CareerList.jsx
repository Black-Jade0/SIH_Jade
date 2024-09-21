import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BACKENDBASEURL } from "../config"
// CareerList Component
const CareerList = ({ careers }) => {
    const [images, setImages] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            setError(null); // Reset error state before fetching
            try {
                const imagePromises = careers.career.map(async (career) => {
                    try {
                        const response = await axios.get(
                            BACKENDBASEURL+`/images/searchImage`,
                            {
                                params: {
                                    query: career.title,
                                },
                            }
                        );
                        return {
                            title: career.title,
                            image: response.data,
                        };
                    } catch (err) {
                        return { title: career.title, image: null };
                    }
                });

                const results = await Promise.all(imagePromises);

                const imageMap = results.reduce((acc, { title, image }) => {
                    if (image) acc[title] = image.urls.small;
                    return acc;
                }, {});

                setImages(imageMap);
            } catch (err) {
                setError("Failed to fetch career images.");
            }
        };

        if (careers && Array.isArray(careers.career)) {
            fetchImages();
        }
    }, [careers]);

    if (!careers || !Array.isArray(careers.career)) {
        return <div>Type career name for results.</div>; // Display a message when no data is available
    }

    return (
        <div>
            <h2>Career Opportunities</h2>
            {error && <div className="error">{error}</div>}{" "}
            {/* Display error message if any */}
            <ul className="w-full h-auto flex flex-row flex-wrap gap-4 justify-center my-6 px-2">
                {careers.career.map((career) => (
                    <li
                        key={career.code}
                        className="career-item flex flex-col w-[15%] border-black rounded-md gap-1"
                    >
                        <div>
                            <img
                                className="rounded-md"
                                src={
                                    images[career.title] || "fallback-image-url"
                                }
                            />
                        </div>
                        <h1>
                            <b>{career.title}</b>
                        </h1>
                        <p>
                            <strong>Link:</strong>{" "}
                            <Link to={`/moreinfopage/${career.code}`}>
                                <i> More Info</i>
                            </Link>
                        </p>
                        <p>
                            <strong>Tags:</strong>
                            <ul>
                                <li>
                                    Bright Outlook:{" "}
                                    {career.tags.bright_outlook ? "Yes" : "No"}
                                </li>
                                <li>
                                    Green Job:{" "}
                                    {career.tags.green ? "Yes" : "No"}
                                </li>
                                <li>
                                    Apprenticeship Available:{" "}
                                    {career.tags.apprenticeship ? "Yes" : "No"}
                                </li>
                            </ul>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CareerList;

