import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
	flex-direction: column;
  width: 16%;
  @media (max-width: 800px) {
    width: 32%;
  }
  @media (max-width: 400px) {
    width: 45%;
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
  height: 150px;
`

export default function FourthItem({item: {id, artwork, title, content}}) {
  return (
    <Div>
      <IMG src={artwork} alt={id}/>
      <H1>Lorem Ipsum</H1>
      <P>{content.substring(0, 70)}</P>
    </Div>
  )
}
