import React from "react";
import "./style.css";
import ServiceCard from "../ServiceCard";


const ProviderCard=(props)=>{
  const providerUrl = `/providers/id/${props.id}`;
    
    const logo = props.name[0].toUpperCase();

  return (
    <div className="provDiv">
      
      <div className="provInfo">
<        div className="logo">
             {logo}    
         </div>

          <div className="info">
                <h2> {props.name} </h2>
              
      
          </div>
       </div>
            <ServiceCard  {...props.service}/>
            <div className="book">
              <a href={providerUrl} className="btn" id={props.id} >
                
              Book with {props.name} 
            </a>
            </div>
      </div>
    
  );
}

export default ProviderCard;
