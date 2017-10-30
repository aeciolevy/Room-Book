import React from 'react';
import { Modal } from 'react-bootstrap';
import Spinner from 'react-spinkit';

const Loading = (props) => {
  return (
    <Modal show={props.open}
    dialogClassName="custom-modal" className="load">
      <Spinner name="pacman" style={{transform: 'translate(50vw,40vh)'}}/>
    </Modal>
  );

}

export default Loading;