import React from "react";
import { render, screen } from "@testing-library/react";
import GameCard from "./GameCard";

describe("GameCard Component", () => {
  it("Renders gamecard correctly with props", () => {
    const game = {
      image: "vite.svg",
      title: "Test Game",
      description: "This is a test game.",
    };
    render(
      <GameCard
        image={game.image}
        title={game.title}
        description={game.description}
      />
    );
    expect(screen.getByAltText("Game Image")).toHaveAttribute(
      "src",
      game.image
    );
    expect(screen.getByText(game.title)).toBeInTheDocument();
    expect(screen.getByText(game.description)).toBeInTheDocument();
  });
  it("Renders gamecard correctly without any props", () => {
    render(<GameCard />);
    expect(screen.getByAltText("Game Image")).toBeInTheDocument();
  });
});
