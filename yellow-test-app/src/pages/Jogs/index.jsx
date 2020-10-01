import React, { useEffect, useState } from "react";
import './Jogs.scss';
import sadEmoticon from '../../assets/sadEmoticon.png';
import { Link } from 'react-router-dom'

export default function Jogs({ getJogs }) {
  const [ jogs, setJogs ] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const jogsList = await getJogs();
      setJogs(jogsList.response.jogs);
      console.log(jogsList.response.jogs)
    }
    fetchData();
  }, [])
  const emptyJog = (
    <div className='Jogs-empty'>
      <div className='Jogs-empty__sad'>
        <img src={sadEmoticon} alt="sad-emoticon"/>
        <p>Nothing is there</p>
      </div>
      <button><Link to='/add'>Create your jog first</Link></button>
    </div>
  )
  return (
    <div className="page">
      {emptyJog}
      {jogs.map((item,i)=>{
        return(
          <div key={i}>{item.time}</div>
        )
      })}
    </div>
  )
}