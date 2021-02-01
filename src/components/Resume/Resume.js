import React from 'react'
import styled from 'styled-components'
import ResumeItem from './ResumeItem'
import Container from '../Container'

const ResumeTitle = styled.h1`
    border-bottom: 3px solid #11ABB0;
    padding-bottom: 6px;
    font: 18px/24px 'opensans-bold', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    width: 110px;
    margin-right: 30px;
    margin-top: 0;
    height: 20px;
`

const ResumetItens = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 48px;
  padding-bottom: 24px;
  border-bottom: 1px solid #E8E8E8;
`
const itens =[
    {
        title : 'Fatec',
        subtitle : 'ADS 2013 even 2017',
        text : 'Describe your experience at school, what you learned, what useful skills you have acquired etc.'
    },
    {
        title : 'Fatec',
        subtitle : 'ADS 2013 even 2017',
        text : 'Describe your experience at school, what you learned, what useful skills you have acquired etc.'
    }
]


const Resume = styled(({className}) =>(
    <section className={className} id='resume'>
        <Container>
            <ResumetItens>
                <ResumeTitle>Education</ResumeTitle>
                <ResumeItem itens={itens}/>
            </ResumetItens>
            <ResumetItens>
                <ResumeTitle>Education</ResumeTitle>
                <ResumeItem itens={itens}/>
            </ResumetItens>
            <ResumetItens>
                <ResumeTitle>Jobs</ResumeTitle>
                <ResumeItem itens={itens}/>
            </ResumetItens>
        </Container>
    </section>
))`
  width: 100%;
  padding: 50px 0 30px;
`

export default Resume
