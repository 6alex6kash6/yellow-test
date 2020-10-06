import React, { useEffect, useState } from "react";
import './Header.scss';
import logo from '../../assets/logo.png';
import burgerMenu from '../../assets/burger-menu.png'
import { Drawer } from 'antd';
import logoGreen from '../../assets/logo-green.png'
import filterDisabled from '../../assets/filter-enabled.png'
import filterEnabled from '../../assets/filterActive.png'
import { Link } from 'react-router-dom'

export default function Header({ setShowPicker }) {
  const [ visible, setVisible ] = useState(false)

  const showDrawer = () => {
    setVisible(true);
  };
  const showDatePicker = () => {
    setShowPicker(true)
    setFilterIcon(filterEnabledLogo)
  }
  const closeDatePicker = () => {
    setShowPicker(false)
    setFilterIcon(filterDisabledLogo)
  }
  const logoBurger = (<img src={logoGreen} alt="green-logo"/>)
  const filterEnabledLogo = (<img src={filterEnabled} alt="burger-menu" onClick={closeDatePicker}
                                  style={{ marginRight: '40px', cursor: 'pointer' }}/>)
  const filterDisabledLogo = (<img src={filterDisabled} alt="burger-menu" onClick={showDatePicker}
                                   style={{ marginRight: '40px', cursor: 'pointer' }}/>)
  const [ filterIcon, setFilterIcon ] = useState(filterDisabledLogo)
  const links = (
    <div className='links-mobile'>
      <p onClick={() => setVisible(false)}><Link to='/jogs'>Jogs</Link></p>
      <p onClick={() => setVisible(false)}><Link to='/info'>Info</Link></p>
      <p><Link to='#'>Contact us</Link></p>
    </div>
  )
  const onClose = () => {
    setVisible(false);
  };
  const headNav = (
    <>
      {filterIcon}
      < img src={burgerMenu} alt="burger-menu" onClick={showDrawer} style={{ cursor: 'pointer' }}/>
    </>
  )
  return (
    <div className='Header'>
      <img src={logo} alt="main-logo"/>
      <div>
        {headNav}
      </div>

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