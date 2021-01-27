import React from 'react'
import styled from 'styled-components'

const Li = styled.li`
    position: relative;
    list-style: none;
    height: 48px;
    display: inline-block;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
`

const Ul = styled.ul`
    min-height: 48px;
    width: auto;
    text-align: center;
`
const Link = styled.a` 
    display: inline-block;
    padding: 8px 13px;
    text-decoration: none;
     font-weight: bold;
    text-align: left;
    color: #fff;
    transition: color .2s ease-in-out;
    margin: 0;
    border: none;
    outline: none;
    :hover{
      color: yellow;
      cursor: pointer;
    }
`
const NavbarItem = ()=>{
    return (
        <Ul>
            <Li>
                <Link>Home</Link>
            </Li>
            <Li>
                <Link>About</Link>
            </Li>
            <Li>
                <Link>Resume</Link>
            </Li>
            <Li>
                <Link>Works</Link>
                <Link>Contacts</Link>
            </Li>
        </Ul>
    )
}

export default NavbarItem
