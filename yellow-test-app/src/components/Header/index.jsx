import React, { useState } from "react";
import './Header.scss';
import logo from '../../assets/logo.png';
import burgerMenu from '../../assets/burger-menu.png'
import { Drawer } from 'antd';
import logoGreen from '../../assets/logo-green.png'

export default function Header() {
  const [ visible, setVisible ] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const logoBurger = (<img src={logoGreen} alt="green-logo"/>)
  const links = (
    <div className='links-mobile'>
      <p>Jogs</p>
      <p>Info</p>
      <p>Contact us</p>
    </div>
  )
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className='Header'>
      <img src={logo} alt="main-logo"/>
      <img src={burgerMenu} alt="burger-menu" onClick={showDrawer}/>
      <Drawer
        title={logoBurger}
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
        width='100%'
      >
        {links}
      </Drawer>
    </div>
  )
}