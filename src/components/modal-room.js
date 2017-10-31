import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Slider from './slider';

const ModalRoom = (props) => {
  const { modal, toggle } = props;
  const { name, location, capacity, size, equipment, images } = props.data[0];
  return(
    <Modal isOpen={modal} toggle={toggle} >
      <ModalHeader> Room {name} </ModalHeader>
      <ModalBody>
        <Slider />
        Testing
      </ModalBody>
    </Modal>
  );
};

export default ModalRoom;

