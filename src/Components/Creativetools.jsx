import { Link } from "react-router-dom";

export const CreativeTools = () => {
    return (
        <div>
            <div className="m-2 p-2 flex">
                <button
                    style={{
                        color: "white",
                        backgroundColor: "blue",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        marginRight: "10px",
                        transition:
                            "background-color 0.3s ease, transform 0.2s ease",
                    }}
                    type="button"
                    className="focus:outline-none"
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "darkblue";
                        e.target.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "blue";
                        e.target.style.transform = "scale(1)";
                    }}
                >
                    <Link
                        to="/Searchcareers"
                        style={{
                            backgroundColor: "none",
                            color: "white",
                            textDecoration: "none",
                        }}
                    >
                        Search Careers
                    </Link>
                </button>
                <button
                    style={{
                        color: "black",
                        backgroundColor: "#f0f0f0",
                        padding: "10px 20px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        cursor: "pointer",
                        transition:
                            "background-color 0.3s ease, transform 0.2s ease",
                    }}
                    type="button"
                    className="focus:outline-none"
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#e0e0e0";
                        e.target.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#f0f0f0";
                        e.target.style.transform = "scale(1)";
                    }}
                >
                    <Link
                        to="/basicquiz"
                        style={{
                            color: "black",
                            textDecoration: "none",
                        }}
                    >
                        Basic Quiz
                    </Link>
                </button>
                <button
                    style={{
                        color: "black",
                        backgroundColor: "#f0f0f0",
                        padding: "10px 20px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        cursor: "pointer",
                        transition:
                            "background-color 0.3s ease, transform 0.2s ease",
                    }}
                    type="button"
                    className="focus:outline-none"
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#e0e0e0";
                        e.target.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#f0f0f0";
                        e.target.style.transform = "scale(1)";
                    }}
                >
                    <Link
                        to="/user/newquiz"
                        style={{
                            color: "black",
                            textDecoration: "none",
                        }}
                    >
                        New Quiz
                    </Link>
                </button>
            </div>
        </div>
    );
};
