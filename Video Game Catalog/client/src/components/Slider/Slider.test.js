import React from "react";
import { render, screen } from "@testing-library/react";
import Slider from "./Slider";

describe("Slider Component", () => {
  it("Renders slider correctly without games", () => {
    render(<Slider />);
    expect(screen.getByText("View More")).toBeInDocument;
  });
});
