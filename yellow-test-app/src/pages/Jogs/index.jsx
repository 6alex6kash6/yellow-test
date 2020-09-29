import React from "react";
import './Jogs.scss';
import sadEmoticon from '../../assets/sadEmoticon.png';
import { Link } from 'react-router-dom'

export default function Jogs() {
  const emptyJog = (
    <div className='Jogs-empty'>
      <div className='Jogs-empty__sad'>
        <img src={sadEmoticon} alt="sad-emoticon"/>
        <p>Nothing is there</p>
      </div>
      <button><Link>Create your jog first</Link></button>
    </div>
  )
  return (
    <div className="page">
      {emptyJog}
    </div>
  )
}