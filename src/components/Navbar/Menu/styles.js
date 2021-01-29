import styled from "styled-components";

export const MenuButtonClose = styled.button`
  position: absolute;
  right: 0;
  color: #fff;
  list-style: none;
  margin-right: 5px;
  background: none;
  border: none;
`

export const MenuOptions = styled.ul`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background-color: mediumpurple;
  margin:0;
  padding-top: 10px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-duration: 0.250s;
  animation-name: onShow;
  animation-timing-function: cubic-bezier(0.6, 0.86, 0.86, 0.74);
  @media (min-width: 768px) {
    display: none;
  }
  @keyframes onShow {
  from {
    height: 0;
    background-color: #c4b5e2;
  }
  to {
    height: 100vh;
    background-color: mediumpurple;
  }
}
`

export const Link = styled.a` 
    padding: 8px 13px;
    text-decoration: none;
    font-weight: bold;
    text-align: left;
    color: #fff;
    transition: color .2s ease-in-out;
    margin: 0;
    border: none;
    outline: none;
    display:block;
    :hover{
      color: yellow;
      cursor: pointer;
    }
`

export const MenuButton = styled.i`
  border: none;
  outline: none;
  background-color: unset;
  color: #fff;
  display: block;
  cursor: pointer;
  margin-top: 10px;
  position:absolute;
  right: 0;
  margin-right: 20px;
  @media (min-width: 768px) {
    display: none;
  }
`

export const Menu = styled.div`
    position:relative;
`

export const NavOptions = styled.div`
    display: none;
    @media (min-width: 768px) {
      display: flex;
      position:relative;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
`
