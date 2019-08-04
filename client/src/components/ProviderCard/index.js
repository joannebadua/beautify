import React from "react";
import "./style.css";

function ProviderCard(props) {
  const providerUrl = `/provider/${props.id}`;

  return (
    <div className="provDiv">
      <div className="logo">
        <img alt="" src={props.image} />
      </div>
      <div className="info">
        <h3> {props.name} </h3>

        <a href={providerUrl} className="btn" {...props}>
          Book with {props.name}
        </a>
      </div>
    </div>
  );
}

export default ProviderCard;
