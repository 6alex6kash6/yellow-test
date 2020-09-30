import React from "react";
import './AddJog.scss'
import closeButton from '../../assets/closebtn.png';
import { useHistory } from "react-router-dom";

export default function AddJog() {

  const history = useHistory();

  const handleClick = () => {
    history.push('/jogs')
  }
  return (
    <div className='page'>
      <div className="add-jog">
        <img src={closeButton} alt="close button" className='add-jog__close' onClick={handleClick}/>
        <form className="add-jog__form">
          <label htmlFor="distance">Distance</label>
          <input type="text" id='distance'/>
          <label htmlFor="time">Time</label>
          <input type="text" id='time'/>
          <label htmlFor="date">Date</label>
          <input type="text" id='date'/>
          <input type='submit' value='Save'/>
        </form>
      </div>
    </div>
  )
}