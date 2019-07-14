import React, { Component } from "react";
import './App.css';
import * as moment from 'moment'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: null
    }
  }

  componentDidMount(){
    this.setState({date: moment().format('DD/MM/YYYY')})
  }

  render() {
      return (
      <div className="App">
        <h1>{this.state.date}</h1>
      </div>
    );
  }
}

export default App;
