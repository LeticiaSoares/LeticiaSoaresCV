import React, { useState } from 'react';
import {Link, NavOptions} from "../styles";

const NavbarItens = () =>{
    return(
        <NavOptions>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Resume</Link>
            <Link>Works</Link>
            <Link>Contacts</Link>
        </NavOptions>
    )
}

export default NavbarItens;
