import React from "react";
import './education.css';
import EducationCard from "./EducationCard";

const Education = ({ schools }) => {
    return (
        <div className="body-page">
            {schools.map(school => (
                <EducationCard id={school.id} schooldata={school}/>
            ))}
        </div>
    );
}

export default Education;