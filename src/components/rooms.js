import React from 'react';
import Slider from './slider';
import { cardStyle } from './components-styled';

const Rooms = (props) => {
  const { name, location, capacity } = props.data;
  return (
    <div className="card" style={cardStyle}>
      <div className="card-body">
        <h4 className="card-title"> Room {name} </h4>
        <Slider />
        <h6 className="card-subtitle mb-2 text-muted">Location: {location} </h6>
        <h6 className="card-subtitle mb-2 text-muted">Capacity: {capacity} </h6>
      </div>
    </div>
  );
};

export default Rooms;
