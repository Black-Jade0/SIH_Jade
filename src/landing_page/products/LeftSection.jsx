import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { ChatBotState } from "../../atoms/keywordatom";

function LeftSection({
    imageURL,
    productName,
    productDesription,
    ChatBot,
    imageStyle, // Receive imageStyle as a prop
}) {
    const [flag, setFlag] = useState(ChatBot);
    const [chatstate, setChatBotState] = useRecoilState(ChatBotState);

    function handleChatBot() {
        setChatBotState(true); // Set chat state to true to open the chatbot
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img
                        className="rounded-md"
                        src={imageURL}
                        style={imageStyle}
                        alt={productName}
                    />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>
                        <b>{productName}</b>
                    </h1>
                    <br />
                    <p>{productDesription}</p>
                    <div>
                        {flag ? (
                            <div className="mt-4">
                                <button
                                    className="px-4 py-2 text-white rounded-sm hover:scale-110 bg-blue-600 z-0"
                                    onClick={handleChatBot} // Use handleChatBot function
                                >
                                    Open ChatBot
                                </button>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
