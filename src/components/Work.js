import React from "react";


const Work = ({work, handleEdit} ) => {



    return (

        <ul>

 {work.map((task) => {

       return <li key = {task.id}><span>{task.text}</span> 
                
       <button onClick={() => handleEdit(work, task.id)}>Edit</button>
       </li>;

     })}

        </ul>
       

    );
};


export default Work;