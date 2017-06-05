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
    this.state.data.push(statusData);
    this.setState({
      data : this.state.data
    });
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
