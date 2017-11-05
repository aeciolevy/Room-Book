/* eslint react/jsx-filename-extension: 0 react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import SliderView from './slider-view';
import { Collapse } from 'reactstrap';
import { cardStyle, DivText, imgStyle } from './components-styled';

const Rooms = (props) => {
  const { collapse, available } = props;
  const { id, name, location, capacity, size, equipment, images } = props.data;
  const URL = `https://challenges.1aim.com/roombooking/`;

  return (
    <div className="card" style={cardStyle}>
      <div className="card-body">
        <h4 className="card-title"> Room {name} </h4>
        <SliderView available={available}/>
        <div className="d-flex flex-row justify-content-between">
          <DivText primary> <b> Location: </b> {location}  </DivText>
          <DivText primary> <b> Capacity: </b> {capacity} </DivText>
          <DivText primary> <b> Size: </b> {size} </DivText>
        </div>
        <div style={{ float: 'left' }}>
          <button className="btn btn-outline-info" onClick={() => props.handleDetailsClick(id)} >
            More details
          </button>
        </div>
        <div style={{ float: 'right' }}>
          <button className="btn btn-outline-info" onClick={ () => { props.handleClick(id)} }> Book </button>
        </div>
        <Collapse isOpen={collapse} style={{clear: 'both'}}>
          <DivText> <b> Equipments: </b>
            {equipment.map((value, id) => {
              let caracter = id === equipment.length - 1 ? `.` : `,`;
              return <span key={id}> {`${value}${caracter}`} </span>;
            })
            }
          </DivText>
          <div className="d-flex flex-row flex-wrap justify-content-around" >
            {images.map(value => <img key={value} alt="room" src={`${URL}${value}`} style={imgStyle} className="rounded" /> )}
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Rooms;
