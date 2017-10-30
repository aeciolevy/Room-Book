import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserType, getRooms } from './actions/index';
import Intro from './components/intro';
import Booking from './components/booking';
import moment from 'moment';
import './style/App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { page: 2}
  }

  componentDidMount() {
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
        rooms={this.props.rooms}
        handleChange={this.handleChange}/> : null}
      </div>
    );
  }
}

function mapStateToProps({user, rooms}) {
  return {user, rooms};
}

export default connect(mapStateToProps, {getUserType, getRooms})(App);
