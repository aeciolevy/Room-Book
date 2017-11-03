/* eslint react/jsx-filename-extension: 0, react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { H4Section } from './components-styled';
import RoomForm from './room-form';
import AtendeeForm from './atendee-form';
import { checkNumber } from '../utils/help';
import Slider from './slider';

const ModalRoom = (props) => {
  const { handleSubmit, modal, toggle } = props;
  const { name } = props.data[0];
  const submit = (data) => {
    data.room = name;
    data.passes ? checkNumber(data.passes) : data.passes = [];
    props.submit(data);
  };

  return (
    <Modal isOpen={modal} toggle={toggle} >
      <ModalHeader> Room {name} </ModalHeader>
      <ModalBody>
        <H4Section> Booking Info </H4Section>
        <form onSubmit={handleSubmit(submit)}>
          <RoomForm Field={Field} />
          <button type="submit" className="btn btn-info" style={{ float: 'right' }}> Book </button>
          <H4Section style={{clear: 'both'}}> Atendees </H4Section>
          <FieldArray name="passes" component={AtendeeForm} />
        </form>
      </ModalBody>
    </Modal>
  );
};

export default reduxForm({form: 'roomForm'})(ModalRoom);

