import React, { Component } from 'react';
import TimerForm from './timer-form';
import moment from 'moment';
import { timeArray } from '../utils/help';
import { startTime, required, greater } from '../utils/validation';
import 'rc-time-picker/assets/index.css';

class TimerInput extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {
    let time = timeArray(this.props.avail);
    this.setState({time})
  }

  available = (value) => {
    if (this.props.name === 'time_start') {
      return startTime(value, this.state.time);
    }
    if (this.props.name === 'time_end') {
      return startTime(value, this.state.time)
    }
  }

  checkGreater = (value) => {
    const { time_start, time_end} = this.props.times;
    const { name } = this.props;
    return greater(name, value, time_start, time_end)
  }

  render() {
    const { Field, name, label, avail } = this.props;
    return (
      <Field
        name={name}
        label={label}
        format={null}
        validate={[required, this.available, this.checkGreater]}
        component={TimerForm}
      />
    );
  }
}

export default TimerInput;
