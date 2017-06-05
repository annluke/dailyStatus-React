import React, { Component } from 'react';

class Status extends Component {
  render() {
    return(
      <li className="status-wrapper">
        <span className="date">{this.props.date}</span>
        <span className="description">{this.props.description}</span>
        <div className="right-section">
        <p className="time-spent">
          <span>{this.props.hours + ' : '}</span>
          <span>{this.props.minutes + ' hour(s)'}</span>
        </p>
          <span className="type">{this.props.type}</span>
          <span className="project">{this.props.project}</span>
        </div>
      </li>
    );
  }
}

export default Status;
