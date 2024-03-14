import React from "react";
import "./Slider.css";
import GameCard from "../GameCard/GameCard";

const Slider = (props) => {
  return (
    <div className="slider-container">
      <table className="slider-table">
        <thead>
          <tr>
            <th id="header-genre">{props.type}</th>
            <th colSpan="4"></th>
            <th id="view-link">View More</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {props.games &&
              props.games.map((game, index) => (
                <td key={index}>
                  <GameCard
                    image={game.image}
                    title={game.title}
                    description={game.description}
                  />
                </td>
              ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Slider;