import React, { Component } from 'react';
import axios from 'axios'
import FirstItem from './components/FirstItem'
import SecondItem from './components/SecondItem'
import ThirdItem from './components/ThirdItem'
import FourthItem from './components/FourthItem'
import styled from 'styled-components'

const FourthDiv = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`
const ThirdDiv = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`
const FirstAndSecondDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get(`/`)
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
  }

  renderFirstAndSecond = () => {
    if (this.state.data.length > 0) {
      return (
        <FirstAndSecondDiv>
          {this.state.data.slice(1, 6).map((item, i) => {
            if(i === 0) {
              return <FirstItem item={item} key={item.id} size={1} />
            }
            return <SecondItem item={item} key={item.id} size={2} />
          })}
        </FirstAndSecondDiv>
      )
    }
  }
  renderThird = () => {
    if (this.state.data.length > 0) {
      return (
        <ThirdDiv>
          {this.state.data.slice(6, 10).map(item => <ThirdItem item={item} key={item.id} size={3} />)}
        </ThirdDiv>
      )
    }
  }
  renderFourth = () => {
    if (this.state.data.length > 0) {
      return (
        <FourthDiv>
          {this.state.data.slice(10, 16).map(item => <FourthItem item={item} key={item.id} size={4} />)}
        </FourthDiv>
      )
    }    
  }

  render() {
    return (
      <div className="App">
        {this.renderFirstAndSecond()}
        {this.renderThird()}
        {this.renderFourth()}
      </div>
    );
  }
}

export default App;
