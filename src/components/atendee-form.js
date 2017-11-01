/* eslint react/jsx-filename-extension: 0, react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Field } from 'redux-form';
import { H4Section } from './components-styled';
import FieldFormControl from './field-form-control';
import { required, email, phoneNumber } from '../utils/validation';

const AtendeeForm = ({ fields }) => {

  return (
    <div>
      <button
        className="btn btn-secondary"
        style={{ marginBottom: '15px' }}
        onClick={() => fields.push({})}
      >
        Add Atendee
      </button>
      {fields.map((atendee, index) => (
        <div key={index}>
          <button type="button" className="btn btn-danger"
            onClick={() => fields.remove(index)}
            style={{float: 'right', fontSize: '14px', padding: '3px'}}
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
          <H4Section> Atendee {index + 1} </H4Section>
          <Field
          type="text"
          name={`${atendee}.name`}
          sizeL={3}
          sizeI={9}
          offset={3}
          label="Name"
          placeholder="Name"
          validate={required}
          component={FieldFormControl}
        />
        <Field
          type="email"
          name={`${atendee}.email`}
          sizeL={3}
          sizeI={9}
          offset={3}
          label="Email"
          placeholder="Email"
          validate={[required, email]}
          component={FieldFormControl}
        />
        <Field
          type="number"
          name={`${atendee}.number`}
          sizeL={3}
          sizeI={9}
          offset={3}
          label="Phone"
          placeholder="Phone"
          validate={[required, phoneNumber]}
          component={FieldFormControl}
        />
      </div>
    ))}
    </div>
  );
};

export default AtendeeForm;
