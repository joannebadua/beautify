import React from "react";
import "./style.css";
import ServiceCard from "../ServiceCard";

function ProviderCard(props) {
  const providerUrl = `/providers/${props.id}`;

    
    const logo = props.name[0].toUpperCase();

  return (
    <div className="provDiv">
      
      <div className="provInfo">
<        div className="logo">
             {logo}    
         </div>

          <div className="info">
                <h3> {props.name} </h3>
              
      
          </div>
       </div>
            <ServiceCard  {...props.service}/>
            <div className="book">
              <a href={providerUrl} className="btn" >
              Book with {props.name}
            </a>
            </div>
      </div>
    
  );
}

export default ProviderCard;
