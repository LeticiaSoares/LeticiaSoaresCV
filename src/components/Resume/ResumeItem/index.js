import React from 'react'
import styled from 'styled-components'

const Title = styled.p`
  margin-top: 0;
  font: 25px/30px 'opensans-bold', sans-serif;
`
const SubTitle = styled.p`
    font: 16px/24px 'librebaskerville-italic', serif;
    color: #6E7881;
    margin-bottom: 18px;
    margin-top: 9px;
`

const ResumeItem = styled(({className,itens}) =>(
    <div className={className}>
        {itens && itens.map(({title,subtitle,text})=>(
            <div>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
                <p>{text}</p>
            </div>
        ))}
    </div>
))`
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    margin-top:0;
  }
`

export default ResumeItem
