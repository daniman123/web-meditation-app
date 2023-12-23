import { render, screen } from "@testing-library/react";
import React from "react";
import TestHooksComponent from "./TestHooksComponent";

describe("useMyCustomHook", () => {
  it("should display the updated value", () => {
    render(<TestHooksComponent />);
    expect(screen.getByTestId("hook-value")).toHaveTextContent("Updated Value");
  });
});
