import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import FirstItem from './components/FirstItem'
import SecondItem from './components/SecondItem'
import ThirdItem from './components/ThirdItem'
import FourthItem from './components/FourthItem'

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
      return this.state.data.map(item => {
        if (item.id === 1) {
          return <FirstItem item={item} />
        } else if (item.id < 5) {
          return <SecondItem item={item} key={item.id} />          
        } else if (item.id < 10) {
          return <ThirdItem item={item} key={item.id} />          
        } else if (item.id < 16) {
          return <FourthItem item={item} key={item.id} />          
        } else {
          return null
        }
      })
    }
  }

  render() {
    return (
      <div className="App">
        {this.renderData()}
      </div>
    );
  }
}

export default App;
