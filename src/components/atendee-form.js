/* eslint react/jsx-filename-extension: 0, react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Field } from 'redux-form';
import { H4Section } from './components-styled';
import FieldFormControl from './field-form-control';

const required = value =>  (value ? undefined : 'Required');
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;
const phoneNumber = value =>value && !/^([0-9]{9,15})$/i.test(value)?
  'Invalid phone number, must be at list 9 digits' : undefined;

const AtendeeForm = ({ fields, meta: { error, submitFailed } }) => {

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
