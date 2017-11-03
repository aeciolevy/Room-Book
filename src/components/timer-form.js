/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { Component } from 'react';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import 'rc-time-picker/assets/index.css';

class TimerForm extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
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
            onChange={ value => input.onChange(moment(value))}
            disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 19, 20, 21, 22, 23]}
            hideDisabledOptions
            getPopupContainer={triggerNode => triggerNode.parentNode}
          />
        </div>
        <p className="help-block" style={{marginBottom: 0}}> {meta.touched ? meta.error : ''}</p>
      </div>
    );
  }
}

export default TimerForm;
