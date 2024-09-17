import { Link, useNavigate } from "react-router-dom";

const Resourcelandingpage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center p-4 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-gray-700">
                Explore Our Resources
            </h1>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 w-full max-w-4xl">
                <button
                    type="button"
                    onClick={() => navigate("/careerguides")}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all"
                >
                    Career Guides
                </button>
                <button
                    type="button"
                    onClick={() => navigate("/edupathways")}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all"
                >
                    Educational Pathways
                </button>
                <button
                    type="button"
                    onClick={() => navigate("/studymaterials")}
                    className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-600 transition-all"
                >
                    Study Materials
                </button>
                <button
                    type="button"
                    onClick={() => navigate("/skills")}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition-all"
                >
                    Skills and Certifications
                </button>
                <button
                    type="button"
                    onClick={() => navigate("/careerdevtools")}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all"
                >
                    Career Development Tools
                </button>
            </div>

            <div className="mt-8">
                <Link
                    to="/search"
                    className="bg-gray-800 text-white px-6 py-2 rounded-full shadow-md hover:bg-gray-900 transition-all"
                >
                    Search
                </Link>
            </div>
        </div>
    );
};

export default Resourcelandingpage;
