import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import GamePage from "./GamePage";
import Slider from "../Slider/Slider";
import GameInfoModal from "../GameInfoModal/GameInfoModal";

Enzyme.configure({ adapter: new Adapter() });

describe("GamePage Component", () => {
  const gameList = [
    {
      image: "Minecraft.png",
      title: "Minecraft",
      description:
        "Minecraft is a 2011 sandbox game developed by Mojang Studios and originally released in 2009.",
      releaseDate: "November 18, 2011",
      price: "$26.95",
    },
    {
      image: "GTA5.png",
      title: "GTA5",
      description:
        "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games.",
      releaseDate: "September 17, 2013",
      price: "$29.99",
    },
  ];
  it("Renders page correctly", () => {
    const wrapper = shallow(<GamePage gameList={gameList} />);
    expect(wrapper.find(Slider)).toHaveLength(gameList.length);
    expect(wrapper.find("GameInfoModal").exists()).toBe(false);
  });
  it("Open and close modal when game card is clicked", () => {
    const wrapper = shallow(<GamePage gameList={gameList} />);
    wrapper.find('Slider[type="Popular"]').prop("onClick")(gameList[0]);
    expect(wrapper.find("GameInfoModal").exists()).toBe(true);
    expect(wrapper.find("GameInfoModal").prop("title")).toBe(gameList[0].title);
    expect(wrapper.find("GameInfoModal").prop("description")).toBe(
      gameList[0].description
    );
    expect(wrapper.find("GameInfoModal").prop("releaseDate")).toBe(
      gameList[0].releaseDate
    );
    expect(wrapper.find("GameInfoModal").prop("price")).toBe(gameList[0].price);
    wrapper.find("GameInfoModal").prop("onClick")();
    expect(wrapper.find("GameInfoModal").exists()).toBe(false);
  });
});
