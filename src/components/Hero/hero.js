import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import styled from  'styled-components'
import space from  '../../assets/space.png'
import Section from  '../Section'

const Title = styled.h1`
    font: 70px/1.1em 'opensans-bold', sans-serif;
    color: #fff;
    letter-spacing: -2px;
    //margin-top: 190px;
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
  svg {
    width: 50px;
    height: 50px;
  }
`

const SocialMediaLink = styled.a`
  cursor: pointer;
  font-style: unset;
  color: #fff;
`

const Hero = ()=>{
    return (
        <Section image={space} margin={'-60px'}>
            <Title>Leticia Soares</Title>
            <Subtitle>Frontend Developer</Subtitle>
            <SocialMedias>
                <SocialMediaLink
                    href='https://www.linkedin.com/in/leticiasoaresfrontenddeveloper/'
                    target='_blank'
                >
                    <LinkedInIcon/>
                </SocialMediaLink>
                <SocialMediaLink
                    href='https://github.com/LeticiaSoares'
                    target='_blank'
                >
                    <GitHubIcon/>
                </SocialMediaLink>
            </SocialMedias>
        </Section>
    )
}

export default Hero;
