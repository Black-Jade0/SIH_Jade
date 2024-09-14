import React from "react";
import "./styles.css";

function RightSection({
    imageURL,
    imageStyle,
    productName,
    productDesription,
}) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5 mt-5">
                    <h1>
                        <b>{productName}</b>
                    </h1>
                    <br />
                    <p>{productDesription}</p>
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
