import React from "react";


const Overview = (props) => {

    const {background} = props;

    return (

        <ul>

            {background.map((info) => {

                return <li key = {info.id}>{info.text}</li>;

            })}
        </ul>
       

    );
};


export default Overview;