import React from "react";
import './buttons.css';

function Buttons() {
    return (
        <div id="button-collection">
            <a class="buttons" style="text-decoration:none" href="projects.html">
                <button><b>Projects</b></button>
            </a>
            <a class="buttons" style="text-decoration:none" href="https://github.com/liviaearl">
                <button><b>GitHub</b></button>
            </a>
            <a class="buttons" style="text-decoration:none" href="contactInfo.html">
                <button><b>Contact Info</b></button>
            </a>
            <a class="buttons" style="text-decoration:none" href="aboutMe.html">
                <button><b>About Me</b></button>
            </a>
        </div>
    );
}

export default Buttons;