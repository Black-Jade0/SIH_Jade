import { Link } from "react-router-dom";

export const CreativeTools = () => {
    return (
        <div className="flex justify-center items-center bg-gray-100">
            <div className="m-4 p-6 space-x-4 flex">
                {/* Search Careers Button */}
                <Link to="/Searchcareers" className="no-underline">
                    <button
                        type="button"
                        className="focus:outline-none hover:text-white hover:bg-blue-600 transition-all transform hover:scale-105 rounded-lg px-6 py-3 shadow-lg"
                    >
                        Search Careers
                    </button>
                </Link>

                {/* New Quiz Button */}
                <Link to="/user/newquiz" className="text-blue-600 no-underline">
                    <button
                        type="button"
                        className="focus:outline-none text-blue-600 bg-gray-200 hover:bg-gray-300 transition-all transform hover:scale-105 rounded-lg px-6 py-3 shadow-lg border border-gray-300"
                    >
                        New Quiz
                    </button>
                </Link>
            </div>
        </div>
    );
};
