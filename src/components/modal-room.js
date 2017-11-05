/* eslint react/jsx-filename-extension: 0, react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { formValueSelector, Field, FieldArray, reduxForm } from 'redux-form';
import { H4Section } from './components-styled';
import RoomForm from './room-form';
import AtendeeForm from './atendee-form';
import { checkNumber } from '../utils/help';
import TimerInput from './timer-input';
import moment from 'moment';

const selector = formValueSelector('roomForm');

const ModalRoom = (props) => {
  const { handleSubmit, modal, toggle, timeValues } = props;
  const { name, avail } = props.data[0];
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
          <div className="d-flex flex-row">
            <div className="col-sm-6">
              <TimerInput
                Field={Field}
                times={timeValues}
                avail={avail}
                name="time_start"
                label="Start Time"
              />
            </div>
            <div className="col-sm-6">
              <TimerInput
                Field={Field}
                times={timeValues}
                avail={avail}
                name="time_end"
                label="End Time"
              />
            </div>
          </div>
          <RoomForm Field={Field} />
          <button type="submit" className="btn btn-info" style={{ float: 'right' }}> Book </button>
          <H4Section style={{ clear: 'both' }}> Atendees </H4Section>
          <FieldArray name="passes" component={AtendeeForm} />
        </form>
      </ModalBody>
    </Modal>
  );
};

function mapStateToProps(state) {
  return ({
    timeValues: selector(state, 'time_start', 'time_end'),
  });
}

export default reduxForm({form: 'roomForm'})(connect(mapStateToProps, null)(ModalRoom));

