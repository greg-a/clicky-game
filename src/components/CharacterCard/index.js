import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
      <div className="card">
        <div className="img-container" 
          onClick={() => props.selectCharacter(props.id)}>
          <img 
          alt={props.name} 
          src={props.image} />
        </div>
      </div>
  );
}

export default CharacterCard;
