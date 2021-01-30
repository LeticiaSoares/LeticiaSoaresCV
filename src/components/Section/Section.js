import React from  'react'
import styled from 'styled-components'

const Section = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 700px;
    width: 100%;
    margin-top: ${({margin})=>margin};
    background-image: url(${({image})=>image});
    background-color: ${({color})=>color} ;
`

export default Section
