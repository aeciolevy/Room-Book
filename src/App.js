import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserType, getRooms, sendPass } from './actions/index';
import Intro from './components/intro';
import Booking from './components/booking';
import moment from 'moment';
import './style/App.css';
import SliderView from './components/slider-view';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { page: 1}
  }

  componentWillMount() {
    this.props.getRooms({date: moment().unix()})
  }

  handleClickIntro = (data) => {
    this.setState({page: 2 })
    this.props.getUserType(data);
  }

  handleChange = (date) => {
    this.props.getRooms({date: moment(date).unix()})
  }

  render() {
    return (
      <div>
        {this.state.page === 1 ? <Intro handleClick={this.handleClickIntro} /> : null}
        {this.state.page === 2 ? <Booking user={this.props.user.type}
        handleLogo={ () => this.setState({page: 1})}
        rooms={this.props.rooms}
        handleBooking={ booking => this.props.sendPass(booking)}
        handleChange={this.handleChange}/> : null}
        {this.state.page === 3 ? <SliderView /> : null}
      </div>
    );
  }
}

function mapStateToProps({user, rooms}) {
  return {user, rooms};
}

export default connect(mapStateToProps, {getUserType, getRooms, sendPass})(App);
