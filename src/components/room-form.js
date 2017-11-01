import React from 'react';
import FieldFormControl from './field-form-control';
import { required } from '../utils/validation';

const RoomForm = (props) => {
  const { Field } = props;
  return (
    <div className="d-flex flex-column">
      <Field
        type="text"
        name="title"
        sizeL={3}
        sizeI={9}
        offset={3}
        label="Title"
        placeholder="Please, give a title to this event"
        validate={required}
        component={FieldFormControl}
      />
      <Field
        type="text"
        name="description"
        sizeL={3}
        sizeI={9}
        offset={3}
        label="Description"
        placeholder="Please, describe your event"
        validate={required}
        component={FieldFormControl}
      />
    </div>
  );
};

export default RoomForm;
