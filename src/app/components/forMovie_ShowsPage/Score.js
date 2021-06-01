import React from 'react'
import styles from './Score.module.scss';
import ScoreItem from './ScoreItem'
const Score = ({data}) => {
  return (
    <div className={styles.score}>
      <p className={styles.score__text}>User Score</p> 
      <ul className={styles.score__list}>
        {data && data.map((s, index) => <ScoreItem key={index} data={s}/>)}
        
      </ul>
    </div>
  )
}

export default Score;