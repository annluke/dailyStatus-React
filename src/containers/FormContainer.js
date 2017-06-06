import React, { Component } from 'react';
import moment from 'moment';
import TextArea from '../components/TextArea';
import Select from '../components/Select';

class FormContainer extends Component {
  constructor() {
    super();
    const fromDate = moment().subtract(7, 'days').format('MM/DD/YY');
    const toDate = moment().format('MM/DD/YY');
    var start = new Date(fromDate);
    var end = new Date(toDate);
    var dateList = [];
    while(start < end) {
     dateList.push(moment(start).format('MM/DD/YY'));
     var newDate = start.setDate(start.getDate() + 1);
     start = new Date(newDate);
    }
    this.state = {
      date : toDate,
      dateOptions : dateList,
      projectName : 'WHS Commitment Platform',
      projectList : ['WHS Commitment Platform', 'BCtA Toolkit', 'Smart Apps', 'Private Fly', 'Optimize'],
      activityType : 'Coding',
      typeList : ['Coding', 'HTML/CSS', 'Testing', 'Graphics Design', 'UX Design', 'Marketing'],
      hours : '08',
      hoursList : ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16'],
      minutes : '00',
      minutesList : ['00', '15', '30', '45'],
      statusDescription : ''
    }
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleFieldChange(event) {
    this.setState({[event.target.name] : event.target.value })
  }
  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      date : '',
      projectName : 'WHS Commitment Platform',
      activityType : 'Coding',
      hours : '08',
      minutes : '00',
      statusDescription : ''
    });
  }
  handleFormSubmit(event) {
    event.preventDefault();
    const dataObject = {
      date : this.state.date,
      projectName : this.state.projectName,
      activityType : this.state.activityType,
      hours : this.state.hours,
      minutes : this.state.minutes,
      statusDescription : this.state.statusDescription
    }
    this.props.submittedData(dataObject);
    this.handleClearForm(event);
  }
  render() {
    return (
      <form className = "form-container" onSubmit={this.handleFormSubmit}>
      <h2 className="section-title">Bursts</h2>
      <Select
        className="common-select"
        title={'Date'}
        name={'date'}
        placeholder={'Choose date'}
        controlFunc={this.handleFieldChange}
        options={this.state.dateOptions}
        selectedOption={this.state.date} />
      <Select
        className="project-select"
        title={'Project'}
        name={'projectName'}
        placeholder={'Choose project'}
        controlFunc={this.handleFieldChange}
        options={this.state.projectList}
        selectedOption={this.state.projectName} />
      <Select
        className="common-select"
        title={'Activity Type'}
        name={'activityType'}
        placeholder={'Select activity type'}
        controlFunc={this.handleFieldChange}
        options={this.state.typeList}
        selectedOption={this.state.activityType} />
      <Select
        className="time-select"
        title={'Time (hours)'}
        name={'hours'}
        placeholder={'Select time'}
        controlFunc={this.handleFieldChange}
        options={this.state.hoursList}
        selectedOption={this.state.hours} />
      <Select
        className="time-select"
        title={'(minutes)'}
        name={'minutes'}
        placeholder={'Select time'}
        controlFunc={this.handleFieldChange}
        options={this.state.minutesList}
        selectedOption={this.state.minutes} />
      <TextArea
        title={'Status Description'}
        content={this.state.statusDescription}
        name={'statusDescription'}
        controlFunc={this.handleFieldChange}
        placeholder={'Enter description'} />
      <div className="btn-wrapper">
        <input
          type="submit"
          className="submit-btn"
          value="Save"/>
      </div>
      </form>
    );
  }
}

export default FormContainer;
