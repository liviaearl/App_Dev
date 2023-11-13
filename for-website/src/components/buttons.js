import React from "react";
import './buttons.css';

function Buttons() {
    return (
        <div id="button-collection" className="body-page">
            <a className="buttons" href={projects.html}>
                <button><b>Projects</b></button>
            </a>
            <a className="buttons" href={github.com/liviaearl}>
                <button><b>GitHub</b></button>
            </a>
            <a className="buttons" href={contactInfo.html}>
                <button><b>Contact Info</b></button>
            </a>
            <a className="buttons" href={aboutMe.html}>
                <button><b>About Me</b></button>
            </a>
        </div>
    );
}

export default Buttons;