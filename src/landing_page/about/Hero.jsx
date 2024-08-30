import React from "react";

function Hero() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 mb-5">
                <h1 className="fs-2 text-center">Welcome to Our Platform</h1>
                <p className="text-center">
                    Discover new opportunities and connect with mentors to guide
                    your career path. Our platform offers comprehensive tools to
                    help you explore and achieve your professional goals.
                </p>
            </div>

            <div
                className="row p-5 mt-5 border-top text-muted"
                style={{ lineHeight: "1.8", fontSize: "1.2em" }}
            >
                <div className="col-6 p-5">
                    <p>
                        Our mission is to empower individuals by providing
                        access to personalized career guidance and resources.
                    </p>
                    <p>
                        Whether you're a student or a professional, our platform
                        is designed to help you navigate your career journey.
                    </p>
                    <p>
                        Join our community of learners and mentors today and
                        take the next step towards your future.
                    </p>
                </div>
                <div className="col-6 p-5">
                    <p>
                        We believe in the power of mentorship and the importance
                        of finding the right career path.
                    </p>
                    <p>
                        <a href="#" style={{ textDecoration: "none" }}>
                            Learn more about our mission and values.
                        </a>
                    </p>
                    <p>
                        Ready to get started? Sign up today and start exploring
                        the possibilities.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
