import React from "react";
import Itinerary from "../itinerary/index.lazy";
import styled from "styled-components";
import device from "../../utils/device";

function App() {
  return (
    <AppContainer>
      <Itinerary />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  margin: 10px auto;
  width: calc(100% - 20px);

  @media ${device.laptop} {
    width: 800px;
  }
`;

export default App;
