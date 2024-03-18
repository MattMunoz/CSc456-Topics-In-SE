import React from "react";
import "./GameCard.css";

const GameCard = (props) => {
  const { onClick } = props;
  return (
    <div className="card-container" onClick={onClick} data-testid="game-card">
      <img src={props.image} alt="Game Image" id="game-image" />
      <div className="description-container">
        <h4 id="game-title">{props.title}</h4>
        <p id="game-description">{props.description}</p>
      </div>
    </div>
  );
};

export default GameCard;
