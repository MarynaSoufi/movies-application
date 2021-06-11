import React, { useState } from 'react'
import Genres from './Genres'
import Score from './Score'
import KeyWords from './KeyWords'
import styles from './Filters.module.scss'
import data from '../../data/score'
import icon from'../../assets/chevron_right_black_24dp.svg'
import classNames from 'classnames';
import { useThemeContext } from '../../contexts';

const Filters = ({genres, isVote, score, handleCheck, onHandleWord, value, isGenre, checked}) => {

  const {isDarkMode} = useThemeContext();
  console.log(isDarkMode);

  const [btn, setBtn] = useState(false);
  const handleClick = () => {
    setBtn(!btn);
    console.log(btn);
  }
  

  return (
    <div className={styles.filter__holder}>
      <div className={classNames(styles.holder, `${isDarkMode ? styles.holder__dark : styles.holder}`)}>
         <p className={styles.holder__text}>Filters</p>
         <img className={classNames(styles.holder__icon, `${btn ? styles.holder__icon__up : styles.holder__icon__down}`)} onClick={handleClick} src={icon} alt="open/down"></img>
        
      </div>
      <div className={classNames(styles.filter, `${btn ? styles.filter__active : styles.filter__hide}`)}>
        <Genres genres={genres} handleCheck={handleCheck} isGenre={isGenre} checked={checked}/>
        <Score data={data} isVote={isVote} score={score}/>
        <KeyWords onHandleWord={onHandleWord} value={value}/>
      </div>
    </div>
   
  )
}

export default Filters;
