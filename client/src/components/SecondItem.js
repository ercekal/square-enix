import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
	flex-direction: column;
  width: 32%;
  @media (max-width: 800px) {
    width: 48%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`
const H1 = styled.h1`
  padding-left: 10px;
  text-align: left;
`
const P = styled.p`
  padding-left: 10px;
  text-align: left;
`
const IMG = styled.img`
  height: 250px;
`

export default function SecondItem({item: {id, artwork, title, content}}) {
  return (
    <Div>
      <IMG src={artwork} alt={id}/>
      <H1>Lorem Ipsum</H1>
      <P>{content.substring(0, 150)}</P>
    </Div>
  )
}
