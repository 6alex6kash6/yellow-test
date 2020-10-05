import React, { useEffect } from "react";
import './JogDetails.scss';
import runIcon from '../../assets/run-icon.png'

export default function JogDetails({ data }) {
  const correctDate = new Date(data.date).toDateString()
  const speed = Math.round(data.distance / (data.time / 60))
  return (
    <div className='jog-item'>
      <img src={runIcon} alt="run-icon" width='87px' height='87px'/>
      <div className='jog-item-details'>
        <span>{correctDate.slice(3)}</span>
        <p>Speed: <span>{speed} km/h</span></p>
        <p>Distance: <span>{data.distance} km</span></p>
        <p>Time: <span>{data.time} min</span></p>
      </div>
    </div>
  )
}