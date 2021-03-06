import React, { Component } from 'react';

import { ClockWrapper }from './Clock.styled';
import { gradients } from './sky';

const leadingZero = (i) => (i < 10 ? i = '0' + i : i);
const nextHour = (hour) => hour + 1 < 24 ? { hour: hour + 1 } : { hour: 0 };
const gradient = (hour) => `linear-gradient(${gradients[leadingZero(hour)]})`;
const setTime = (hour) => { document.body.style.background = gradient(hour) }

export class Clock extends Component {
  constructor() {
    super()
    this.state = {
      size: 150,
      hour: 10,
      minute: 0,
      second: 0
    };

    setTime(this.state.hour);
  }

  nextHour = () => {
    this.setState(prevState => nextHour(this.state.hour));
    setTime( nextHour(this.state.hour).hour );
  }

  getDash = () => {
    const totalDiameter = (this.state.size * 3.14) / 2;
    const diff = this.state.hour + (this.state.minute/60) + (this.state.second/600);
    const partialDiameter = (Math.round(diff * (totalDiameter/24) * 100) / 100);
    return {
      'strokeDasharray': `${partialDiameter} ${totalDiameter}`
    }
  }

  render() {
    return (
      <ClockWrapper>
        <svg className="clock"
          style={this.getDash()}>
            <circle id="circle" r="37.5" cx="75" cy="75"></circle>
        </svg>

        <span className="hour"
          onClick={this.nextHour}>
          {this.state.hour}
        </span>

      </ClockWrapper>
    );
  }
}
