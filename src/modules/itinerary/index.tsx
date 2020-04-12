
import React from "react";
import StopPointForm from './components/stop-point-form'
import StopPointList from './components/stop-point-list'

import "./styles.scss";

function Itinerary() {
  return (
    <div className="itinerary">
      <div>
        <h1 className="title">Shipment Itinerary</h1>
      </div>
      <div className="container">
        <StopPointForm />
      </div>
      <div className="container">
        <StopPointList />  
      </div>
    </div>
  );
}

export default Itinerary;