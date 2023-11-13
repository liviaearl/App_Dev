import React from "react";
import './contactInfo.css';

function ContactInfo() {
    return (
        <div className="body-page" id="conIn">
            <div className="header">
                <h1><b>Contact Info</b></h1>
            </div>
            <p className="body-page" id="make-bigger1">
                <b>School Email:</b> learl1@terpmail.umd.edu <br/>
                <b>Personal Email:</b> liviag.earl@gmail.com <br/>
                <b>Phone Number:</b> 443-876-3473
            </p>
            <a className="buttons" href={website.html}>
                <button><b>Back to Page</b></button>
            </a>
        </div>
    );
}

export default ContactInfo;