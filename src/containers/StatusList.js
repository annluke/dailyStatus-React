import React, { Component } from 'react';
import Status from '../components/Status';

class StatusList extends Component {
  render() {
    var rows = this.props.status.map(function(s) {
      return(
        <Status
          key={s.date}
          date={s.date}
          project={s.projectName}
          type={s.activityType}
          hours={s.hours}
          minutes={s.minutes} 
          description={s.statusDescription}/>
      );
    });
    return(
      <ul className="status-list-container">
        {rows}
      </ul>
    );
  }
}

export default StatusList;
