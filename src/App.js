import React, { Component } from 'react';
import FormContainer from './containers/FormContainer';
import StatusList from './containers/StatusList';
import Header from './components/Header';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data : [
        {date : '20/05/17', projectName : 'WHS Commitment Platform', activityType : 'Coding', hours : '08', minutes : '00', statusDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
        {date : '21/05/17', projectName : 'WHS Commitment Platform', activityType : 'Coding', hours : '09', minutes : '30', statusDescription: "Test Description2"}
      ]
    }
    this.handleSubmittedData = this.handleSubmittedData.bind(this);
  }
  handleSubmittedData(statusData) {
    let submitStatus = true,
        totalHours = 0,
        totalMinutes = 0,
        enteredHours = Number.parseInt(statusData.hours),
        enteredMinutes = Number.parseInt(statusData.minutes);

    //total time spent
    for (const item of this.state.data) {
      if(item.date === statusData.date) {
        totalMinutes += Number.parseInt(item.minutes);
        if(totalMinutes >= 60) {
          totalHours += 1;
          totalMinutes -= 60;
        }
        totalHours += Number.parseInt(item.hours);
      }
    }
    totalMinutes += enteredMinutes;
    if(totalMinutes >= 60) {
      totalHours += 1;
      totalMinutes -= 60;
    }
    totalHours += enteredHours;
    if((totalHours) > 16) {
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
