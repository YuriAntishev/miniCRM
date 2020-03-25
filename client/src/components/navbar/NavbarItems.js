import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const NavbarItems = (props) => {

    const { LogOut } = props;

    const onLogout = () => {
        LogOut();
    };

    const authLinks = (
        <Menu
            theme="dark"
            mode="horizontal"
            align="right"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
        >
            <Menu.Item>
                <LogoutOutlined />
                <span>Logout</span>
                <Link onClick={onLogout} to='#' />
            </Menu.Item>
        </Menu >
    );

    const guestLinks = (
        <Menu
            theme="dark"
            mode="horizontal"
            align="right"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
        >
            <Menu.Item>
                <LoginOutlined />
                <span>Login</span>
                <Link to='/login' />
            </Menu.Item>
        </Menu >
    );

    return (
        <Fragment>
            {localStorage.getItem("token") ? authLinks : guestLinks}
        </Fragment>
    );
};

export default NavbarItems;