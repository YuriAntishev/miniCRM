import React from 'react';
import 'antd/dist/antd.css';
import NavbarItems from '../navbar/NavbarItems'

const Navbar = (props) => {
    return (
        <NavbarItems
            isAuthenticated={props.isAuthenticated}
            LogOut={props.LogOut}
        />
    );
};

export default Navbar;