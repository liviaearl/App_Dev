import React from "react";
import './education.css';

const EducationCard = ({ schooldata }) => {
    return (
        <div>
            <h4> {schooldata.school} </h4>
            <p> {schooldata.gradYear} </p>
            <p> {schooldata.cred} </p>
            <p> {schooldata.courses} </p>
        </div>
    );
}

export default EducationCard;