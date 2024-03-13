import React from "react";
import { render, screen } from "@testing-library/react";
import GameCard from "./GameCard";

describe("GameCard Component", () => {
  it("Renders gamecard correctly with props", () => {
    const props = {
      image: "vite.svg",
      title: "Test Game",
      description: "This is a test game.",
    };
    render(
      <GameCard
        image={props.image}
        title={props.title}
        description={props.description}
      />
    );
    expect(screen.getByAltText("Game Image")).toHaveAttribute(
      "src",
      props.image
    );
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
  });
  it("Renders gamecard correctly without any props", () => {
    render(<GameCard />);
    expect(screen.getByAltText("Game Image")).toBeInTheDocument();
  });
});
