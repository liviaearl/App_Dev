import React from "react";
import './aboutMe.js';

function AboutMe() {
    return (
        <div className="body-page" id="abMe">
            <div className="header">
                <h1><b>About Me</b></h1>
            </div>
            <p className="body-page" id="make-bigger2">
                I am freshman at the University of Maryland, College Park. I am a computer science and mathematics double major. <br/> 
                I am currently a memeber of the App Dev Club at UMD where I hope to gain more experience in app development and create my 
                own website. 
            </p>
            <a className="buttons" href={website.html}>
                <button><b>Back to Page</b></button>
            </a>
        </div>
    );
}

export default AboutMe;