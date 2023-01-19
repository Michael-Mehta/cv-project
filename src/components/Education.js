import React from "react";


const Education = ({education, handleEdit}) => {

    
    return (

    <ul>

 {education.map((studies) => {

        return <li key = {studies.id}><span>{studies.text}</span> 
                
        <button onClick={() => handleEdit(education, studies.id)}>Edit</button>
          </li>;
 })}
    </ul>
       

    );
};


export default Education;