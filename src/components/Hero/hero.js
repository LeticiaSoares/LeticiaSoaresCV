import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import styled from  'styled-components'
import space from  '../../assets/space.png'

const Section = styled.section`
    position: absolute;
    top: 48px;
    height: 700px;
    left: 0;
    width: 100%;
    background-image: url(${space});
`

const Title = styled.h1`
    font: 70px/1.1em 'opensans-bold', sans-serif;
    color: #fff;
    letter-spacing: -2px;
    margin-top: 190px;
    text-align: center;
`

const Subtitle = styled.h2`
  font: 70px/1.1em 'opensans-bold', sans-serif;
  color: #fff;
  text-align: center;
  font-size: 40px;
`

const SocialMedias = styled.div`
  display: flex;
  color: #fff;
  justify-content: center;
`

const Hero = ()=>{
    return (
        <Section>
            <Title>Leticia Soares</Title>
            <Subtitle>Frontend Developer</Subtitle>
            <SocialMedias>
                <LinkedInIcon/>
            </SocialMedias>
        </Section>
    )
}

export default Hero;
