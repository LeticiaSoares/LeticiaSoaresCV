import React, { useState } from 'react';
import {
    MenuOptions,
    Link,
    MenuButton,
    MenuButtonClose,
    Menu
} from '../styles'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const MenuMoBile = ()=>{
    const [show, setShow] = useState(false);
    const handleShowMenu = () => {
        setShow(!show);
    };
    return (
        <Menu>
            <MenuButton onClick={handleShowMenu}>
                <MenuIcon />
            </MenuButton>
            {show && (
                <MenuOptions>
                    <MenuButtonClose onClick={()=>setShow(false)}>
                        <CloseIcon/>
                    </MenuButtonClose>
                    <Link>Home</Link>
                    <Link onClick={()=>setShow(false)} href='#about'>About</Link>
                    <Link>Resume</Link>
                    <Link>Works</Link>
                    <Link>Contacts</Link>
                </MenuOptions>
            )}
        </Menu>

    )
}

export default MenuMoBile
