import React from "react";
import "./App.css";
import GamePage from "./components/GamePage/GamePage";
import gameList from "./games.json";
const App = () => {
  return (
    <div className="App">
      <GamePage gameList={gameList} />
    </div>
  );
};

export default App;
