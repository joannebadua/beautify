import React from "react";
import "./style.css";
import ServiceCard from "../ServiceCard";

function ProviderCard(props) {
  const providerUrl = `/provider/${props.id}`;

    
    const logo = props.name[0].toUpperCase();

  return (
    <div className="provDiv">
      <div className="logo">

        {logo}
        {/* <img alt="" src={props.img} /> */}
      </div>
      <div className="provInfo">
      <div className="info">
        
        <h3> {props.name} </h3>

        <a href={providerUrl}  {...props}>
         View profile
        </a>
        </div>
        <ServiceCard  {...props}/>
        <div className="book">
           <a href={providerUrl} className="btn" {...props}>
          Book with {props.name}
        </a>
        </div>
      </div>
      
    </div>
  );
}

export default ProviderCard;
