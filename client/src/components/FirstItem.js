import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
	flex-direction: column;
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
  height: 400px;
`

export default function FirstItem({item: {id, artwork, title, content}}) {
	console.log(id, artwork, title, content);
	
  return (
    <Div>
      <IMG src={artwork} alt={id}/>
      <H1>Lorem Ipsum First</H1>
      <P>{content.substring(0, 180)}</P>
    </Div>
  )
}