import React from "react";
import { cleanup } from "@testing-library/react";
import { renderWithRedux } from "../../hocs/renderWithRedux";
import StopPointForm from ".";

describe("<StopPointForm />", () => {
  afterEach(cleanup);

  test("it should mount", () => {
    const { getByTestId } = renderWithRedux(<StopPointForm />);
    const stopPointForm = getByTestId('stop-point-form');

    expect(stopPointForm).toBeInTheDocument();
  });
});