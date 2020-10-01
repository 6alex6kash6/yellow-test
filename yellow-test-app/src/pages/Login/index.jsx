import React from "react";
import './Login.scss'
import bearFace from '../../assets/bearFace.png'
import { Link } from 'react-router-dom';

export default function Login() {
  const handleAuth = () => {
    console.log('authed')
  }
  return (
    <div className='page'>
      <div className='Login-main'>
        <img src={bearFace} alt="bear-face-logo"/>
        <button className='Login-main-button' onClick={handleAuth}><Link to='/jogs'>Let me in</Link></button>
      </div>
    </div>
  )
}