import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000`)
      .then(res => {
        console.log(res);
        const data = res.data;
        this.setState({ data });
      })
  }

  renderData = () => {
    if (this.state.data.length > 0) {
      return this.state.data.map(item => item.id)
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {this.renderData()}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
