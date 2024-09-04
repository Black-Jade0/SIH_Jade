import { useState } from "react";
import axios from "axios";
import CareerList from "./CareerList";
import { useRecoilState } from "recoil";
import { keywordatom } from "../atoms/keywordatom";

export const Searchcareers = () => {
    //const [keyword,setKeyword]=useState("")
    const [userkey, setUserKey] = useRecoilState(keywordatom);
    const [isSearchClicked, setIsSearchClicked] = useState(false); // State to control visibility of CareerList
    const [careers, setCareers] = useState([]);
    const handleChange = (e) => {
        setUserKey(e.target.value); // Update state when input changes
    };
    const handleSearchClick = async (e) => {
        e.preventDefault(); // Prevent form submission
        if (userkey.trim()) {
            // Check if userkey is not empty
            setIsSearchClicked(true); // Set flag to render CareerList
            try {
                const baseURL = `http://localhost:3000/user/api/search?keyword=${userkey}`;
                const response = await axios.get(baseURL);
                setCareers(response.data); // Set career data
            } catch (error) {
                console.error("Error: ", error);
            }
        }
    };

    return (
        <div>
            <div label={"div 1"} style={{ padding: "2px", margin: "4px" }}>
                <div
                    style={{
                        textAlign: "center",
                        margin: "1px",
                        fontWeight: 600,
                        fontSize: "large",
                    }}
                >
                    <p>Search career information with key words</p>
                </div>
                <div>
                    <form
                        style={{
                            maxWidth: "28rem",
                            marginRight: "auto",
                            marginLeft: "auto",
                        }}
                    >
                        <div style={{ position: "relative" }}>
                            <div
                                style={{
                                    position: "absolute",
                                    inset: "0",
                                    display: "flex",
                                    alignItems: "center",
                                    paddingLeft: "0.75rem",
                                    pointerEvents: "none",
                                }}
                            >
                                <svg
                                    style={{
                                        width: "1rem",
                                        height: "1rem",
                                        color: "#6b7280",
                                    }}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                style={{
                                    display: "block",
                                    width: "100%",
                                    padding: "1rem",
                                    paddingLeft: "2.5rem",
                                    fontSize: "0.875rem",
                                    color: "#1f2937",
                                    border: "1px solid #d1d5db",
                                    borderRadius: "0.5rem",
                                    backgroundColor: "#f9fafb",
                                    outline: "none",
                                }}
                                placeholder="Search architect, engineer..."
                                required
                                value={userkey}
                                onChange={handleChange}
                            />
                            <button
                                type="submit"
                                style={{
                                    color: "white",
                                    position: "absolute",
                                    right: "0.625rem",
                                    bottom: "0.625rem",
                                    backgroundColor: "#1d4ed8",
                                    fontWeight: 500,
                                    borderRadius: "0.5rem",
                                    fontSize: "0.875rem",
                                    padding: "0.5rem 1rem",
                                    outline: "none",
                                }}
                                onClick={handleSearchClick}
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div>{isSearchClicked && <CareerList careers={careers} />}</div>
        </div>
    );
};
