import React, { Component } from 'react';
import { connect } from 'react-redux';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Rooms from './rooms';
import { Alert } from 'reactstrap';
import ModalRoom from './modal-room';
import Search from './search';
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
      filter: '',
      collapse: {},
      available: {},
      keyFiltered: 'name'
    }
  }

  componentWillReceiveProps(nextProps) {
    this.handleAvailable(nextProps.rooms)
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

  addFilter = (e) => {
    this.setState({filter: e.target.value});
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
    data.date = moment(data.time_start, DAY_FORMAT).unix();
    data.time_start = moment(data.time_start).unix();
    data.time_end = moment(data.time_end).unix();
    const bookingData = {};
    Object.keys(data).forEach(elem => elem !== 'passes' ? bookingData[elem] = data[elem] : null);
    this.props.handleBooking({booking: bookingData, passes: data.passes});
    this.setState({modal: !this.state.modal})
  }

  handleDetails = (key) => {
    const collapse = {...this.state.collapse, [key]: !this.state.collapse[key]}
    this.setState({collapse})
 }

  render() {
    const { flash, handleLogo, rooms } = this.props;
    let roomsFiltered = rooms.filter(room => room[this.state.keyFiltered].match(new RegExp(this.state.filter, 'i')));

    return (
      <div className='container'>
        <a onClick={() => handleLogo()} >
          <img alt="logo" src={logo} style={brandStyle}/>
        </a>
        <div style={{textAlign: 'center'}}>
          <DayPickerInput
            onDayChange={this.handleDayClick}
            value={this.state.selectedDay}
            format={DAY_FORMAT}
            style={{textAlign: 'center', borderRadius: '0.25rem'}}

          />
          {flash ?
            <Alert color={flash.isError ? 'danger' : 'success'} style={{ marginTop: '10px' }}>
            {this.props.flash.message}
            </Alert> : null
          }
        </div>
        <Search filter={this.addFilter} select={ value => this.setState({keyFiltered: value})}/>
        {roomsFiltered.map( value => <Rooms
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
