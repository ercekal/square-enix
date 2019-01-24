import React, { Component } from 'react';
import axios from 'axios'
import FirstItem from './components/FirstItem'
import SecondItem from './components/SecondItem'
import ThirdItem from './components/ThirdItem'
import FourthItem from './components/FourthItem'
import styled from 'styled-components'
import Lightbox from 'react-image-lightbox';

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
    data: [],
    photoIndex: -1,
    isOpen: true
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/`)
    .then(res => {
      const data = res.data;
      let images = []
      data.map(item =>  images.push(item.artwork))
      this.setState({ data, images });
    })
  }

  renderFirstAndSecond = () => {
    if (this.state.data.length > 0) {
      return (
        <FirstAndSecondDiv>
          {this.state.data.slice(0, 5).map((item, i) => {
            if (i === 0) {
              return <FirstItem item={item} key={item.id} onClick={() => this.openLightbox(i)}/>
            }
            return <SecondItem item={item} key={item.id} onClick={() => this.openLightbox(i)} />
          })}
        </FirstAndSecondDiv>
      )
    }
  }
  renderThird = () => {
    if (this.state.data.length > 0) {
      return (
        <ThirdDiv>
          {this.state.data.slice(6, 10).map((item, i) => <ThirdItem item={item} key={item.id} onClick={() => this.openLightbox(i)} />)}
        </ThirdDiv>
      )
    }
  }
  renderFourth = () => {
    if (this.state.data.length > 0) {
      return (
        <FourthDiv>
          {this.state.data.slice(10, 16).map((item, i) => <FourthItem item={item} key={item.id} onClick={() => this.openLightbox(i)}  />)}
        </FourthDiv>
      )
    }    
  }

  openLightbox = (id) => {
    this.setState({
      photoIndex: id,
      isOpen: true
    })
  }

  showLightbox = () => {
    const {isOpen, images} = this.state
    const photoIndex = 2
    if (isOpen && images && images.length > 0) {
      return <Lightbox
      mainSrc={images[photoIndex]}
      nextSrc={images[(photoIndex + 1) % images.length]}
      prevSrc={images[(photoIndex + images.length - 1) % images.length]}
      imageTitle={photoIndex + 1 + "/" + images.length}
      onCloseRequest={() => this.setState({ isOpen: false })}
      onMovePrevRequest={() =>
        this.setState({
          photoIndex: (photoIndex + images.length - 1) % images.length
        })
      }
      onMoveNextRequest={() =>
        this.setState({
          photoIndex: (photoIndex + 1) % images.length
        })
        }
      />
    }
  }

  render() {
    return (
      <div className="App">
        {this.renderFirstAndSecond()}
        {this.renderThird()}
        {this.renderFourth()}
        {/* {this.showLightbox()} */}
      </div>
    );
  }
}

export default App;
