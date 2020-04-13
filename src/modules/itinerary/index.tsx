
import React from "react";
import StopPointForm from './components/stop-point-form'
import StopPointList from './components/stop-point-list'
import styled from "styled-components";

const Itinerary = () => {
  return (
    <Container>
      <h1 className="title">
        Shipment Itinerary
      </h1>
      <Block>
        <StopPointForm />
      </Block>
      <Block>
        <StopPointList />  
      </Block>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px 0;
`;

const Block = styled.div`
  margin: 20px 0;
`;

export default Itinerary;