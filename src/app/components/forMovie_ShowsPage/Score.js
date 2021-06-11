import React from 'react'
import styles from './Score.module.scss';
import ScoreItem from './ScoreItem';
import classNames from 'classnames';
import { useThemeContext } from '../../contexts';
const Score = ({data, isVote, score, checked}) => {
  const {isDarkMode} = useThemeContext();
 
  return (
    <div className={classNames(styles.score, `${isDarkMode ? styles.score__dark : styles.score}`)}>
      <p className={styles.score__text}>User Score</p> 
      <ul className={styles.score__list}>
        {data && data.map((s, index) => <ScoreItem key={index} data={s} isVote={isVote} score={score} checked={checked}/>)}
        
      </ul>
    </div>
  )
}

export default Score;