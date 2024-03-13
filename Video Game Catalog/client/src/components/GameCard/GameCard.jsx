import React from "react";
import "./GameCard.css";

const GameCard = (props) => {
  return (
    <div className="card-container">
      <img src={props.image} alt="Game Image" className="game-image" />
      <div className="description-container">
        <h4 id="game-title">{props.title}</h4>
        <p id="game-description">{props.description}</p>
      </div>
    </div>
  );
};

export default GameCard;
