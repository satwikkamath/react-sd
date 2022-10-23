import React, { Component } from 'react'
import './style.css'

class Time extends Component {

  constructor() {
      super();
      this.state = { time: new Date() }; // initialise the state
  }

  componentDidMount() { // create the interval once component is mounted
      this.update = setInterval(() => {
          this.setState({ time: new Date() });
      }, 500); // every 1 seconds
  }

  componentWillUnmount() { // delete the interval just before component is removed
      clearInterval(this.update);
  }

  render() {
      const { time } = this.state; // retrieve the time from state
      const showTime = time.getHours()
        + ' : ' + time.getMinutes() 
        + " : " + time.getSeconds()
        + " : " + time.getMilliseconds();

      return (
      <div className='container'>
          <h2>
          {showTime}
          </h2>
          <div>TEAM ID : 2022ASI-006</div>
      </div>);
  }
}

export default Time
