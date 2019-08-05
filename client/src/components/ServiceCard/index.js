import React from "react";
import "./style.css";

 

function ServiceCard(props) {
    return(
         <div className="serviceDiv">
          <h2>{props.name}</h2>
          <h3>Description</h3>
          {props.description}
          <h3>Duration</h3>
          {props.duration}
          <h3>Price</h3>
          {props.price}
         </div>
    )
}

export default ServiceCard;