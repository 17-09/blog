import * as React from "react";


const AboutMe = () => {
    const currentYear = (new Date()).getFullYear();
    const portrait = require("./portrait.jpg");

    return (
        <div style={{ width: '200px' }}>

            <img src={portrait} alt="Lesley Lai Protrait"></img>

            <article>
                <p>
                    Hi, I am <strong>Lesley Lai</strong>, a Computer Science
        freshman at the <a href="http://www.colorado.edu/">
                        University of Colorado at Boulder</a>.
                </p>
                <p>
                    My primary interests are <a href="https://en.wikipedia.org/wiki/Computer_graphics">Computer Graphics</a> and <a href="https://isocpp.org/">C++</a>.
                </p>
            </article>

            <p style={{
                textAlign: "center",
                margin: "10px 10px",
                fontSize: "12px",
                fontStyle: "italic",
            }}>
                ©2015-{currentYear} Lesley Lai
            </p>
        </div>
    );
};

export default AboutMe;
