import React from "react";
import './Login.scss'
import bearFace from '../../assets/bearFace.png'

export default function Login(){
  return(
    <div className='Login'>
      <div className='Login-main'>
        <img src={bearFace} alt="bear-face-logo"/>
        <button className='Login-main-button'>Let me in</button>
      </div>
    </div>
  )
}