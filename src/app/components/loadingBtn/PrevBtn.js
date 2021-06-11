import React from 'react'
import styles from './LoadBtn.module.scss'
const PrevBtn = ({handlePrev}) => {
  return (
    <button className={styles.btn} onClick={handlePrev}>
      Previous
    </button>
      
    
    
  )
}

export default PrevBtn
