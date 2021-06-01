import React from 'react'
import styles from './ScoreItem.module.scss';

const ScoreItem = ({data}) => {
  return (
    <li className={styles.score__item}>
      <button className={styles.score__item__button} type="checkbox" >0-{data.value}</button>
    </li>
  )
}

export default ScoreItem;
