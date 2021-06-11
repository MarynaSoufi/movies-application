import React from 'react'
import styles from './ScoreItem.module.scss';
import classNames from 'classnames';
import { useThemeContext } from '../../contexts';

const ScoreItem = ({data, isVote, score}) => {
  const {isDarkMode} = useThemeContext();

  return (
    <li className={styles.score__item}>
      
      <button className={classNames( `${!isDarkMode ? (data.value.toString() === score.toString() ? styles.score__item__button__active : styles.score__item__button) : (data.value.toString() === score.toString() ? styles.score__item__button__active__dark : styles.score__item__button__dark)}`)} type="radio" id={data.value}  onClick={isVote} value={data.value}  name="vote">{data.value} - {data.value +3}</button>
   
    </li>
  )
}

export default ScoreItem;
