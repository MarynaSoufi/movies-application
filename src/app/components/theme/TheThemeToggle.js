import React from 'react'
import { ThemeContext, useThemeContext } from '../../context';
import styles from './TheThemeToggle.module.scss';

const TheThemeToggle = () => {
  // const handleClick = () => {
  //   if (typeof onThemeChange === 'function') {
  //     onThemeChange(!isDarkMode)
  //   }
  //  };
  const {isDarkMode, handleThemeChange} = useThemeContext(ThemeContext);

          return(
            <div className={styles.toggle}>
                  <button className={styles.btn} onClick={() => handleThemeChange(!isDarkMode)}>
               {isDarkMode? 'Dark Mode': 'Light Mode'}
            </button>
            </div>
          
          )
 
}

export default TheThemeToggle;
