/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { Component } from 'react';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import { FormFeedback } from 'reactstrap';
import 'rc-time-picker/assets/index.css';

class TimerForm extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  handleChange = (value, input) => {
    this.setState({ value })
    input.onChange(value)
  }

  render() {
    const { label, input, meta} = this.props;

    return (
      <div className="row" style={{ paddingBottom: '20px'}}>
        <div className="col-sm-4"
          style={{ padding: '0', fontSize: '16px' }}
        >
          {label}
        </div>
        <div className="col-sm-8" >
          <TimePicker
            {...input}
            showSecond={false}
            minuteStep={15}
            format="HH:mm"
            value={this.state.value}
            onChange={ (value) => this.handleChange(value, input) }
            disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 19, 20, 21, 22, 23]}
            hideDisabledOptions
            getPopupContainer={triggerNode => triggerNode.parentNode}
          />
        </div>
        <FormFeedback style={{display: 'block'}}> {meta.touched ? meta.error : ''} </FormFeedback>
      </div>
    );
  }
}

export default TimerForm;
