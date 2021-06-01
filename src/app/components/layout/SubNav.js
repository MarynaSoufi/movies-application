import React, { useState, useRef, useEffect } from 'react'
import {
  Link
} from "react-router-dom";
import * as Routes from '../../routes'
import styles from './SubNav.module.scss';
import account from '../../assets/person_black_24dp.svg'

const SubNav = () => {
  const [text, setText] = useState('');

  const handleText = (e) => {
    setText(e.target.value);
  }
  const input = useRef();
  useEffect(() => {
    input.current.focus();
  
  }, [])

  const onKeyPressHandler = (e) => {
    if (e.keyCode === 13) {
      console.log('do validate');
     }
     }
  return (
  <nav className={styles.navigation}>
    <ul className={styles.navigation__list}>
      <li className={styles.navigation__list__item}>
          <Link to ={Routes.ACCOUNT}>
            <img src={account} alt="persone_icon"></img>
          </Link>
      </li>
      <li className={styles.navigation__list__item}>
          <input onKeyDown={onKeyPressHandler} ref={input} className={styles.navigation__list__item__input} value={`${text}`} onChange={handleText} type="text" placeholder="search for a content"></input>
          <Link  to ={`/search?text=${text}`}>
            <button 
            //#endregion
             disabled={!text}>
              SEARCH
            </button>
           
          </Link>
      </li>
    </ul>
  </nav>
  )
}

export default SubNav;
