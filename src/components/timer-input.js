import React, { Component } from 'react';
import TimerForm from './timer-form';
import moment from 'moment';
import { timeArray } from '../utils/help';
import 'rc-time-picker/assets/index.css';

const timer = (value) => {
    // if (this.props.name === 'start-date') {
    //   let flag = this.state.time.reduce( (acc, curr) => {
    //     let time0 = moment(curr[0], 'HH:mm');
    //     let time1 = moment(curr[1], 'HH:mm');
    //     acc = moment(value).isSameOrAfter(time0)
    //     && moment(value).isSameOrBefore(time1) || acc;
    //     return acc;
    //   }, false)
    let flag = false
      // console.log('value', moment(value))
      // console.log(this.state.time[0][0], 'HH:mm')
      // let flag = moment(value).isSameOrAfter(this.state.time[0][0], 'HH:mm')
      // console.log(flag);
      return flag ? 'invalid date' : undefined;
    // }
  }

class TimerInput extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {
    let time = timeArray(this.props.avail);
    this.setState({time})
  }


  render() {
    const { Field, name, label, avail } = this.props;
    return (
      <Field
        name={name}
        label={label}
        validate={timer}
        component={TimerForm}
      />
    );
  }
}

export default TimerInput;
