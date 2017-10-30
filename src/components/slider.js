import React, { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value4: {
        min: 15,
        max: 45,
      },
    };
  }

  render() {
    return (
      <form className="form">
        <InputRange
          maxValue={60}
          minValue={0}
          step={15}
          formatLabel={value => `${value}`}
          value={this.state.value4}
          onChange={value => this.setState({ value4: value })}
          onChangeComplete={value => console.log(value)} />
      </form>
    );
  };
}

export default Slider;
