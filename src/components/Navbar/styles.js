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
  background-color: mediumslateblue;
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
    background-color: mediumslateblue;
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
    border: none;
    outline: none;
    display:block;
    margin:20px 0 20px;
    font-size: 18px;
    @media (min-width: 768px) {
      font-size: 16px;
    }
    :hover{
      color: #ffd534;
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
    margin: 0;
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
