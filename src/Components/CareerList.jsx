import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
                            `http://localhost:3000/images/searchImage`,
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

// import React, { useState } from "react";
// import axios from "axios";

// function CareerList() {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [image, setImage] = useState(null); // For storing a single image
//     const [error, setError] = useState(null);

//     const handleSearch = async (e) => {
//         e.preventDefault();
//         setError(null);
//         setImage(null); // Clear previous image on new search

//         try {
//             const response = await axios.get(
//                 `http://localhost:3000/images/searchImage`,
//                 {
//                     params: { query: searchTerm },
//                 }
//             );

//             setImage(response.data); // Only set one image
//         } catch (err) {
//             setError(err.response?.data?.error || "Failed to fetch image");
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSearch}>
//                 <input
//                     type="text"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     placeholder="Search for an image"
//                 />
//                 <button type="submit">Search</button>
//             </form>

//             {error && <div>Error: {error}</div>}

//             <div>
//                 {image ? (
//                     <img
//                         key={image.id}
//                         src={image.urls.small}
//                         alt={image.alt_description}
//                         style={{ margin: "10px" }}
//                     />
//                 ) : (
//                     <div>No image found</div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default CareerList;
