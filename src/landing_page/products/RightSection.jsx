import React from "react";
import "./styles.css";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

function RightSection({
    imageURL,
    imageStyle,
    productName,
    productDesription,
    internship,
}) {
    const [flag, setFlag] = useState(internship);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5 mt-5">
                    <h1>
                        <b>{productName}</b>
                    </h1>
                    <br />
                    <p>{productDesription}</p>
                    <div className="m-4">
                        {flag ? (
                            <Link to={"/virtualinternship"}>
                                <button className="px-3 py-2 border bg-blue-600 rounded-sm text-white hover:scale-110">
                                    Virtual Internship
                                </button>
                            </Link>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div className="col-6">
                    <img
                        className="rounded-md"
                        src={imageURL}
                        style={imageStyle}
                    />
                </div>
            </div>
        </div>
    );
}

export default RightSection;
