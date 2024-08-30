import { Link } from "react-router-dom";

export const CreativeTools = () => {
    return (
        <div>
            <div className="m-2 p-2 flex">
                <button
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                    <Link to={"/Searchcareers"}>Search Careers</Link>
                </button>
                <button
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                    <Link to={"/basicquiz"}>Basic Quiz</Link>
                </button>
                
            </div>
        </div>
    );
};
