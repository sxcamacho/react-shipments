import React from "react";
import { cleanup } from "@testing-library/react";
import { renderWithRedux } from "../../hocs/renderWithRedux";
import StopPointList from ".";

describe("<StopPointList />", () => {
  afterEach(cleanup);

  test("it should mount", () => {
    const { getByTestId } = renderWithRedux(<StopPointList />);
    const stopPointList = getByTestId("stop-point-list");

    expect(stopPointList).toBeInTheDocument();
  });
});
