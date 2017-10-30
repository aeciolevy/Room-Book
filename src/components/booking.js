import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Rooms from './rooms';
import moment from 'moment';
import 'react-day-picker/lib/style.css';
import logo from '../imgs/Logo.png';

const DAY_FORMAT = 'DD/MM/YYYY';

class Booking extends Component {
  constructor(props){
    super(props);
    this.state = { selectedDay: moment().format(DAY_FORMAT)}
  }

  handleDayClick = (day) => {
    this.props.handleChange(day);
    this.setState({
      selectedDay: moment(day).format(DAY_FORMAT)
    });
  };

  render(){
    const imgStyle = {
      width: '100px',
      borderRadius: '10px',
    }
    console.log(this.props.rooms)
    return (
      <div className='container'>
        <img alt="logo" src={logo} style={imgStyle}/>
        <div style={{textAlign: 'center'}}>
          <DayPickerInput
            onDayChange={this.handleDayClick}
            value={this.state.selectedDay}
            format={DAY_FORMAT}
            style={{textAlign: 'center'}}
          />
       </div>
        {this.props.rooms.map( value => <Rooms key={value.id} data={value} />)}
      </div>
    );
  }
};

export default Booking;
