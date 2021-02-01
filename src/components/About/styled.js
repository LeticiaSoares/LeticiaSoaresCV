import styled from "styled-components";

export const Photo = styled.img`
  background-color: #ffff;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  margin: 0 auto;
  display: block;
`

export const Text = styled.p`
  font-family: 'opensans-regular', sans-serif;
  font-size: 18px;
  color:#fff;
  letter-spacing: 2px;
`

export const Title = styled.p`
  font-family: 'opensans-regular', sans-serif;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color:#fff;
  letter-spacing: 2px;
`

export const Description = styled.div`
   @media (min-width: 768px) {
      //width: 500px;
   }
`
