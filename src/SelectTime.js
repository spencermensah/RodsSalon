import React, { Component } from "react";
import './App.css';
import * as moment from 'moment'
import AlertDialog from './Modal'

class SelectTime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: []
    }
  }

  componentDidMount(){

    this.props.callbackFromParent("listInfo")

  }

  render() {
    for (var i = 15; i < 555; i+=15) {
      const currentTime = moment("10:00", "HH:mm")
      const timeAhead = moment(currentTime).add(i, 'minutes')
      const formattedTime = timeAhead.format("hh:mm A")
      this.state.time.push(formattedTime)
      console.log(formattedTime)
    }


      return (
        <div>
          {this.state.time.map((times, i) =>
            <p> {this.state.time[i]} </p>
          )}
        </div>
    );
  }
}

export default SelectTime;
