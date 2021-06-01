import React from 'react'
import styles from './LoadBtn.module.scss'
const NextBtn = ({handleNext}) => {
  return (
    <button onClick={handleNext}>
      Next
    </button>
  )
}

export default NextBtn;
