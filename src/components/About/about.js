import React from 'react'
import styled from 'styled-components'
import photo from '../../assets/photo.jpg'
import {
    Photo,
    Description,
    Title,
    Text
} from './styled'

const About = styled(({className}) =>(
    <section className={className} id='about'>
        <Photo src={photo} />
        <Description>
            <Title>About Me</Title>
            <Text>Use this bio section as your way of describing yourself and saying what you do,
                what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.</Text>
            <Title>Contact Details</Title>
            <Text>11 963781553</Text>
            <Text>lele_leticia.94@hotmail.com</Text>
        </Description>
    </section>
))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background-color: #de9a48;
  padding: 54px 20px 0;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding: 70px 20px 70px;
  }
`

export default About

