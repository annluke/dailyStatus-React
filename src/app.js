import React, { Component } from 'react';
import FormContainer from './containers/formContainer';
import StatusList from './containers/statusList';
import Header from './components/header';

import './app.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data : [
        {
          date : '20/05/17',
          projectName : 'WHS Commitment Platform',
          activityType : 'Coding',
          hours : '08',
          minutes : '00',
          statusDescription: "Nunc sit amet lacus vitae massa ultricies dapibus. Nam velit orci, iaculis gravida nibh vel, rhoncus fringilla ante. Vestibulum massa est, tempor eget orci sed, dignissim convallis dui."
        },
        {
          date : '21/05/17',
          projectName : 'WHS Commitment Platform',
          activityType : 'Coding',
          hours : '09',
          minutes : '30',
          statusDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
      ]
    }
    this.handleSubmittedData = this.handleSubmittedData.bind(this);
    this.addTime = this.addTime.bind(this);
  }
  addTime(firstTime, secondTime) {
    firstTime.min += secondTime.min;
    if(firstTime.min >= 60) {
      firstTime.hrs += 1;
      firstTime.min -= 60;
    }
    firstTime.hrs += secondTime.hrs;
    return firstTime;
  }
  handleSubmittedData(statusData) {
    let submitStatus = true,
        totalHours = 0,
        totalMinutes = 0,
        enteredHours = Number.parseInt(statusData.hours),
        enteredMinutes = Number.parseInt(statusData.minutes),
        totalTime = { hrs : totalHours, min : totalMinutes},
        enteredTime = { hrs : enteredHours, min : enteredMinutes},
        maxLimit = 16;

    //total time spent
    for (const item of this.state.data) {
      if(item.date === statusData.date) {
        var itemTime = {hrs : Number.parseInt(item.hours), min : Number.parseInt(item.minutes)};
        totalTime = this.addTime(totalTime, itemTime);
      }
    }
    totalTime = this.addTime(totalTime, enteredTime);
    if((totalTime.hrs) > maxLimit) {
      alert('Limit exceeded for the day');
      submitStatus = false;
    }

    //validate date
    if(statusData.date === '') {
      alert('Please select date');
      submitStatus = false;
    }

    //validate project name
    if(statusData.projectName === '') {
      alert('Please select project');
      submitStatus = false;
    }

    //validate activity type
    if(statusData.activityType === '') {
      alert('Please select activity type');
      submitStatus = false;
    }

    //validate hours
    if(statusData.hours === '') {
      alert('Please select hours');
      submitStatus = false;
    }

    //validate minutes
    if(statusData.minutes === '') {
      alert('Please select minutes');
      submitStatus = false;
    }

    //validate description
    if(statusData.statusDescription === '') {
      alert('Please enter activity description');
      submitStatus = false;
    }

    if(submitStatus) {
      this.state.data.push(statusData);
      this.setState({
        data : this.state.data
      });
    }
  }
  render() {
    return (
      <div>
        <Header />
        <section>
          <FormContainer submittedData={this.handleSubmittedData}/>
          <h2 className="section-title">History</h2>
          <StatusList status={this.state.data}/>
        </section>
      </div>
    );
  }
}

export default App;
