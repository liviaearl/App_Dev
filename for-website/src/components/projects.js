import React from "react";
import './projects.css';

function Projects() {
    return (
        <div className="body-page" id="conIn">
            <div className="header">
                <h1><b>Projects</b></h1>
            </div>
            <div className="body-page">
                <h3>Securely modifying adaptive bitrate streaming to hide information</h3>
                <h4>May 2022 - May 2023</h4>
                <ul id="help">
                    <li>Collaborated with a mentor from Lufburrow & Company Inc. to develop an application that modifies 
                        adaptive bitrate streaming to hide information, ranging from text to file inputs, in a video and audio stream </li>
                    <li>Developed the algorithm in Python </li>
                    <li>Adjusted HTML code to fix web browser </li>
                    <li>Examined data packages and reconfigured video stream in Wireshark</li>
                </ul>
                <a className="buttons" href={github.com/pybir8d/SMASH.git}>
                    <button><b>Repository</b></button>
                </a>
                <a className="buttons"  href={website.html}>
                    <button><b>Back to Page</b></button>
                </a>
            </div>
        </div>
    );
}

export default Projects;