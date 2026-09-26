import React from "react";

function HobbyCard(props) {
  return (
    <div className="hobby-card">
      
      <img src={props.image} alt={props.name} />

      <h2>{props.name}</h2>

      <p>{props.description}</p>

    </div>
  );
}

export default HobbyCard;