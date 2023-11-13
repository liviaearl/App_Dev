import React from "react";
import EducationCard from "./EducationCard";

const Education = ({ schools }) => {
    return (
        <div>
            {schools.map(school => (
                <EducationCard id={school.id} schooldata={school}/>
            ))}
        </div>
    );
}

export default Education;