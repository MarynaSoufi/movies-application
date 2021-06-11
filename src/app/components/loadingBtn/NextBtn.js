import React from 'react'
import styles from './LoadBtn.module.scss'
const NextBtn = ({handleNext}) => {
  return (
    <button className={styles.btn} onClick={handleNext}>
      Next
    </button>
  )
}

export default NextBtn;
