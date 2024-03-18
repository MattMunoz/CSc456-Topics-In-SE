import React, { useState } from "react";
import Slider from "../Slider/Slider";
import GameInfoModal from "../GameInfoModal/GameInfoModal";

const GamePage = ({ gameList }) => {
  const [modalGame, setModalGame] = useState(null);

  // Open modal when game card is clicked
  const handleGameCardClick = (game) => {
    setModalGame(game);
  };
  // Close modal when modal background is clicked
  const handleModalClick = () => {
    setModalGame(null);
  };
  return (
    <>
      {modalGame && (
        <GameInfoModal
          image={modalGame.image}
          title={modalGame.title}
          description={modalGame.description}
          releaseDate={modalGame.releaseDate}
          price={modalGame.price}
          onClick={handleModalClick}
        />
      )}
      <Slider type="Popular" games={gameList} onClick={handleGameCardClick} />
      <Slider
        type="New Release"
        games={gameList}
        onClick={handleGameCardClick}
      />
    </>
  );
};

export default GamePage;
