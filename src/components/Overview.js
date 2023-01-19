import React from "react";


const Overview = ({background,handleEdit}) => {

    

    return (

        <ul>


            {background.map((info) => {

              
            

                return <li key = {info.id}><span>{info.text}</span> 
    
                <button onClick={() => handleEdit(background, info.id)}>Edit</button>
            
                  
            

              </li>;

            })}
        </ul>
       

    );
};


export default Overview;