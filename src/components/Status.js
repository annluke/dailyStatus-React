import React from 'react';

const Status = (props) => (
      <li className="status-wrapper">
        <span className="date">{props.date}</span>
        <span className="description">{props.description}</span>
        <div className="right-section">
        <p className="time-spent">
          <span>{props.hours + ' : '}</span>
          <span>{props.minutes + ' hour(s)'}</span>
        </p>
          <span className="type">{props.type}</span>
          <span className="project">{props.project}</span>
        </div>
      </li>
    );

export default Status;
