import React from 'react'
import styles from './KeyWords.module.scss'
const KeyWords = () => {
  return (
    <div className={styles.keyword}>
      <p className={styles.keyword__text}>Keywords</p>
      <input  className={styles.keyword__input} type="text" placeholder="Filter by keywords"></input>
    </div>
  )
}

export default KeyWords;