import React from 'react'
import styles from './LoadBtn.module.scss';
import classNames from 'classnames';
import { useThemeContext } from '../../contexts';
const NextBtn = ({handleNext}) => {
  const {isDarkMode} = useThemeContext();
  return (
    <button className={classNames(styles.btn, `${isDarkMode ? styles.btn__dark : styles.btn}`)} onClick={handleNext}>
      Next
    </button>
  )
}

export default NextBtn;
