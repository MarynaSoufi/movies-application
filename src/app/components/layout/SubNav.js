import React, { useState, useRef, useEffect } from 'react'
import {
  Link, useHistory
} from "react-router-dom";
import * as Routes from '../../routes'
import styles from './SubNav.module.scss';
import account from '../../assets/person_black_24dp.svg'
import icon from '../../assets/search.svg'

const SubNav = () => {
  const [text, setText] = useState('');

  const history = useHistory();
  const handleText = (e) => {
    setText(e.target.value);
  }
  const input = useRef();
  useEffect(() => {
    input.current.focus();
  
  }, [])

  const onKeyPressHandler = (e) => {
    if (e.keyCode === 13) {
      history.push(`/search?text=${text}`)
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
      <li className={styles.navigation__list__item__special}>
          <input onKeyDown={onKeyPressHandler} ref={input} className={styles.navigation__list__item__input} value={`${text}`} onChange={handleText} type="text" placeholder="search for a content"></input>
          <Link  className={styles.search} to ={`/search?text=${text}`}>
            <button  className={styles.navigation__list__item__btn}
             disabled={!text}>
              <img className={styles.navigation__list__item__icon}src={icon} alt="search_icon"></img>
            </button>
           
          </Link>
      </li>
    </ul>
  </nav>
  )
}

export default SubNav;
