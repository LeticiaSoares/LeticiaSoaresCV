import React from 'react'
import styled from 'styled-components'
import Menu from "./Menu";
import NavbarItens from "./NavbarItens";

const Nav = styled.nav`
  width: 100%;
  height: 48px;
  background-color: mediumslateblue;
  font: 12px 'opensans-bold', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  margin: 0 auto;
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
`
const Navbar =()=>{
    return (
            <Nav>
                <Menu/>
                <NavbarItens/>
            </Nav>
    )
}


export default Navbar

