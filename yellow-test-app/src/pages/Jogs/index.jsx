import React, { useEffect, useState } from "react";
import './Jogs.scss';
import sadEmoticon from '../../assets/sadEmoticon.png';
import { Link } from 'react-router-dom';
import JogDetails from "../../components/JogDetails";
import addBtn from '../../assets/add-btn.png'
import { useHistory } from "react-router-dom";

export default function Jogs({ getJogs }) {
  const [ jogs, setJogs ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const jogsList = await getJogs();
      setJogs(jogsList.response.jogs);
      console.log(jogsList.response.jogs)
    }
    fetchData();
  }, [ getJogs ])

  const history = useHistory();

  const handleClick = () => {
    history.push('/add')
  }

  const emptyJog = (
    <div className='page'>
      <div className='Jogs-empty'>
        <div className='Jogs-empty__sad'>
          <img src={sadEmoticon} alt="sad-emoticon"/>
          <p>Nothing is there</p>
        </div>
        <button><Link to='/add'>Create your jog first</Link></button>
      </div>
    </div>
  )
  const jogsArray = jogs.map((item, i) => {
    return (
      <div key={i} className='jogs-wrapper'>
        <JogDetails data={item}/>
      </div>
    )
  })
  return (
    <>
      {jogs.length === 0 ? emptyJog : jogsArray}
      <img src={addBtn} alt="add-button" className='jogs-wrapper-add' onClick={handleClick}/>
    </>
  )
}