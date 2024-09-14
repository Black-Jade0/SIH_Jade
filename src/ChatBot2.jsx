import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import { useState } from "react";

const { theme, style } = buildTheme({
    themeName: "square",
    themeColor: "#2563eb",
});

const clientId = "acc9e11b-e339-4bb2-8bef-762a52aa90ef";

export default function ChatBot2() {
    const client = getClient({ clientId });
    const [isWebchatOpen, setIsWebchatOpen] = useState(false);

    const toggleWebchat = () => {
        setIsWebchatOpen((prevState) => !prevState);
    };

    return (
        <div className="fixed bottom-4 right-4">
            <style>{style}</style>
            <WebchatProvider theme={theme} client={client}>
                <Fab onClick={toggleWebchat} />
                <div
                    className={`fixed top-48 bottom-24 right-0 w-[30%] transition-transform duration-500 ${
                        isWebchatOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <Webchat/>
                </div>
            </WebchatProvider>
        </div>
    );
}
