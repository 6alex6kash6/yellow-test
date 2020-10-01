import React, { useState } from "react";
import './Header.scss';
import logo from '../../assets/logo.png';
import burgerMenu from '../../assets/burger-menu.png'
import { Drawer } from 'antd';

export default function Header() {
  const [visible,setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className='Header'>
      <img src={logo} alt="main-logo"/>
      <img src={burgerMenu} alt="burger-menu" onClick={showDrawer}/>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  )
}