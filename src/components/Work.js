import React from "react";


const Work = (props) => {

    const {work} = props;

    return (

        <ul>

            {work.map((task) => {

                return <li>{task.text}</li>;

            })}
        </ul>
       

    );
};


export default Work;