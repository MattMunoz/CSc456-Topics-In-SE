import React from "react";
import { render, screen } from "@testing-library/react";
import Slider from "./Slider";

describe("Slider Component", () => {
  it("Renders slider with one game", () => {
    const gameList = [
      {
        image: "Minecraft.png",
        title: "Minecraft",
        description:
          "Minecraft is a 2011 sandbox game developed by Mojang Studios and originally released in 2009.",
      },
    ];
    render(<Slider type="Popular" games={gameList} />);
    expect(screen.getByAltText("Game Image")).toHaveAttribute(
      "src",
      gameList.image
    );
    expect(screen.getByText("View More")).toBeInTheDocument();
    expect(screen.getByText("Popular")).toBeInTheDocument();
    expect(screen.getByText(gameList[0].title)).toBeInTheDocument();
    expect(screen.getByText(gameList[0].description)).toBeInTheDocument();
  });
  it("Renders slider correctly without games", () => {
    render(<Slider />);
    expect(screen.getByText("View More")).toBeInTheDocument();
  });
  it("Renders slider with multiple game", () => {
    const gameList = [
      {
        image: "Minecraft.png",
        title: "Minecraft",
        description: "Minecraft is a sandboxm game.",
      },
      {
        image: "Vite.png",
        title: "Vite",
        description: "Vite is a testing game.",
      },
      {
        image: "Fornite.png",
        title: "Fornite",
        description: "Fornite is a battle royale game.",
      },
    ];
    render(<Slider type="New Release" games={gameList} />);
    gameList.forEach((game) => {
      expect(screen.getByText(game.title)).toBeInTheDocument();
      expect(screen.getByText(game.description)).toBeInTheDocument();
    });
    const gameImages = screen.queryAllByAltText("Game Image");
    gameImages.forEach((gameImage, index) => {
      expect(gameImage).toHaveAttribute("src", gameList[index].image);
    });
    expect(screen.getByText("View More")).toBeInTheDocument();
    expect(screen.getByText("New Release")).toBeInTheDocument();
  });
});
