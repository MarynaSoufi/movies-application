import React from 'react'
import { ThemeContext, useThemeContext } from '../../contexts';
import styles from './TheThemeToggle.module.scss';


const TheThemeToggle = () => {

  const {isDarkMode, handleThemeChange} = useThemeContext(ThemeContext);
  window.localStorage.setItem('theme', isDarkMode);

          return(
            <div className={styles.toggle}>
                  <button className={styles.btn} onClick={() => handleThemeChange(!isDarkMode)}>
               {isDarkMode? '☾': '☼'}
            </button>
            </div>
          
          )
 
}

export default TheThemeToggle;
