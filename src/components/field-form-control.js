/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Col, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const FieldFormControl = ({ placeholder, label, type, input, meta, sizeL, sizeI, offset }) => {

  return(
    <FormGroup row>
      <Label sm={sizeL} for={input.name} > { label } </Label>
      <div className={`col-sm-${sizeI}`}>
        <Input type={type} placeholder={placeholder} {...input} valid={meta.touched && meta.invalid ? false : true} />
      </div>
      <div className={`col-sm-6 offset-sm-${offset}`}>
        <FormFeedback style={{display: 'block'}}> {meta.touched ? meta.error : ''} </FormFeedback>
      </div>
    </FormGroup>
    );
};

export default FieldFormControl;
