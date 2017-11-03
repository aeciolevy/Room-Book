import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Rooms from './rooms';
import { Alert } from 'reactstrap';
import ModalRoom from './modal-room';
import moment from 'moment';
import { getLatestMessage } from 'redux-flash';
import 'react-day-picker/lib/style.css';
import { brandStyle } from './components-styled';
import logo from '../imgs/Logo.png';
import { completeObj, manipulate, timeArray } from '../utils/help';

const DAY_FORMAT = 'DD/MM/YYYY';

class Booking extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedDay: moment().format(DAY_FORMAT),
      collapse: {},
      available: {}
    }
  }

  componentDidMount() {
    this.handleAvailable(this.props.rooms)
  }

  handleAvailable (rooms) {
    let available = {};
    rooms.forEach( elem => {
      let timeToHandle = manipulate();
      const availFormatted = timeArray(elem.avail);
      completeObj(availFormatted, timeToHandle);
      available = { ...available, [elem.id]: timeToHandle}
      this.setState({ available })
    })
  }

  handleDayClick = (day) => {
    this.props.handleChange(day);
    this.setState({
      selectedDay: moment(day).format(DAY_FORMAT)
    });
  };

  handleRoomClick (id) {
    this.setState({
      modal: true,
      room: this.props.rooms.filter(value => value.id === id)
    })
  }

  handleSubmit = data => {
    const bookingData = {};
    Object.keys(data).forEach(elem => elem !== 'passes' ? bookingData[elem] = data[elem] : null);
    bookingData.date = moment('01/11/2017').unix();
    bookingData.time_start = moment('01/11/2017 7:15:00').unix();
    bookingData.time_end = moment('01/11/2017 7:30:00').unix();
    this.props.handleBooking({booking: bookingData, passes: data.passes});
    this.setState({modal: !this.state.modal})
  }

  handleDetails = (key) => {
    const collapse = {...this.state.collapse, [key]: !this.state.collapse[key]}
    this.setState({collapse})
 }

  render(){
    const { flash } = this.props;
    return (
      <div className='container'>
        <img alt="logo" src={logo} style={brandStyle}/>
        <div style={{textAlign: 'center'}}>
          <DayPickerInput
            onDayChange={this.handleDayClick}
            value={this.state.selectedDay}
            format={DAY_FORMAT}
            style={{textAlign: 'center'}}
          />
        {flash ?
          <Alert color={flash.isError ? 'danger' : 'success'} style={{ marginTop: '10px' }}>
          {this.props.flash.message}
          </Alert> : null
        }
       </div>
        {this.props.rooms.map( value => <Rooms
          key={value.id}
          data={value}
          available={this.state.available[value.id]}
          collapse={this.state.collapse[value.id]}
          handleClick={ this.handleRoomClick.bind(this) }
          handleDetailsClick={this.handleDetails}
        />)}
        {this.state.modal ? <ModalRoom
          modal={this.state.modal}
          onSubmit={this.handleSubmit}
          data={this.state.room}
          toggle={ () => this.setState({ modal: !this.state.modal})}
          /> :
          null  }
      </div>
    );
  }
};

function mapStateToProps(state){
  return {
    flash: getLatestMessage(state),
    rooms: state.rooms,
  }
}

export default connect(mapStateToProps, null)(Booking);
