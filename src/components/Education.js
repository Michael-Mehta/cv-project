import React from "react";


const Education = (props) => {

    const {education} = props;

    return (

        <ul>

            {education.map((studies) => {

                return <li>{studies.text}</li>;

            })}
        </ul>
       

    );
};


export default Education;