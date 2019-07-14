import React, { Component } from "react";
import './App.css';
import * as moment from 'moment'
import AlertDialog from './Modal'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: []
    }
  }

  componentDidMount(){


  }

  render() {
    for (var i = 0; i < 13; i++) {
      const currentDate = moment()

      const dateAhead = moment(currentDate).add(i, 'days')
      const formattedDate = dateAhead.format('dddd, MMMM Do YYYY')
      this.state.date.push(formattedDate)

    }
      return (
      <div className="App">
        {this.state.date.map((dates, i) =>
          <AlertDialog
            date = {this.state.date[i]}
            />
        )}
      </div>
    );
  }
}

export default App;
