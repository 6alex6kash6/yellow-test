import React from "react";
import './Header.scss';
import logo from '../../assets/logo.png';
import burgerMenu from '../../assets/burger-menu.png'

export default function Header() {
  return (
    <div className='Header'>
      <img src={logo} alt="main-logo"/>
      <img src={burgerMenu} alt="burger-menu"/>
    </div>
  )
}