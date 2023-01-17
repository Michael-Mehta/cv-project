import React from "react";


const Overview = (props) => {

    const {background} = props;

    return (

        <ul>

            {background.map((info) => {

                return <li>{info.text}</li>;

            })}
        </ul>
       

    );
};


export default Overview;