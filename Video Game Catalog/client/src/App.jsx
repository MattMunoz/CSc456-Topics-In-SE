import { React, useState } from "react";
import "./App.css";
import Slider from "./components/Slider/Slider";

const App = () => {
  const gamelist = [
    {
      image: "Apex Legends.png",
      title: "Apex Legends",
      description:
        "Apex Legends is a free-to-play battle royale-hero shooter game developed by Respawn Entertainment and published by Electronic Arts.",
    },
    {
      image: "Fornite.png",
      title: "Fornite",
      description:
        "Fortnite is an online video game and game platform developed by Epic Games and released in 2017.",
    },
    {
      image: "GTA5.png",
      title: "GTA5",
      description:
        "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games.",
    },
    {
      image: "Minecraft.png",
      title: "Minecraft",
      description:
        "Minecraft is a 2011 sandbox game developed by Mojang Studios and originally released in 2009.",
    },
  ];
  return (
    <div className="App">
      <Slider type="Popular" games={gamelist} />
      <Slider type="New Release" games={gamelist} />
      <Slider type="RPG" games={gamelist} />
    </div>
  );
};

export default App;
