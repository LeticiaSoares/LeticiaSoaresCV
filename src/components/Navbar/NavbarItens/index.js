import React from 'react';
import {Link, NavOptions} from "../styles";

const NavbarItens = () =>{
    return(
        <NavOptions>
            <Link>Home</Link>
            <Link href='#about'>About</Link>
            <Link>Resume</Link>
            <Link>Works</Link>
            <Link>Contacts</Link>
        </NavOptions>
    )
}

export default NavbarItens;
