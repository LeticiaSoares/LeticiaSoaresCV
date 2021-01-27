import React from 'react'
import styled from  'styled-components'

const Section = styled.section`
    position: relative;
    height: 800px;
    min-height: 500px;
    width: 100%;
    background-size: cover !important;
    //-webkit-background-size: cover !important;
    text-align: center;
    overflow: hidden;
    background-image: url('./assets/galaxy.jpg');
`

const Title = styled.h1`
    font: 70px/1.1em 'opensans-bold', sans-serif;
    color: #bfbbbf;
    letter-spacing: -2px;
    text-shadow: 0px 1px 3px rgb(0 0 0 / 80%);
    margin-top: 190px;
`
const Hero = ()=>{
    return (
        <Section>
            <Title>Leticia Soares</Title>
        </Section>
    )
}

export default Hero;
