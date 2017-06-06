import React, { Component } from 'react';
import Status from '../components/Status';

class StatusList extends Component {
  render() {
    var rows = this.props.status.map((s,index) => (
        <Status
          key={index}
          date={s.date}
          project={s.projectName}
          type={s.activityType}
          hours={s.hours}
          minutes={s.minutes}
          description={s.statusDescription}/>
      )
    );
    rows.reverse();
    return(
      <ul className="status-list-container">
        {rows}
      </ul>
    );
  }
}

export default StatusList;
