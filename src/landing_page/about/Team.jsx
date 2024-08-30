import React from "react";

function Team() {
    return (
        <div className="container">
            <div className="row p-3 mt-5 border-top">
                <h1 className="text-center ">Meet Our Team</h1>
            </div>

            <div
                className="row p-3 text-muted"
                style={{ lineHeight: "1.8", fontSize: "1.2em" }}
            >
                <div className="col-6 p-3 text-center">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Team Member 1"
                        className="rounded-circle"
                    />
                    <h4 className="mt-5">Jane Doe</h4>
                    <h6>CEO & Founder</h6>
                </div>
                <div className="col-6 p-3">
                    <p>
                        Jane is a seasoned entrepreneur with over 15 years of
                        experience in the tech industry. Her passion for
                        education and technology inspired her to start this
                        platform.
                    </p>
                    <p>
                        She believes in the power of mentorship and is dedicated
                        to helping individuals find their career path through
                        innovative tools and resources.
                    </p>
                    <p>
                        Under her leadership, our team is committed to providing
                        the best career guidance and support to our users.
                    </p>
                    <p>
                        Contact Jane:{" "}
                        <a href="mailto:jane@example.com">jane@example.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;
