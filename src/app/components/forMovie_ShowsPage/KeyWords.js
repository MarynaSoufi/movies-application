import React from 'react'
import styles from './KeyWords.module.scss';
import classNames from 'classnames';
import { useThemeContext } from '../../contexts';
const KeyWords = ({onHandleWord, value}) => {
  const {isDarkMode} = useThemeContext();
  return (
    <div className={classNames(styles.keyword, `${isDarkMode ? styles.keyword__dark : styles.keyword}`)}>
      <p className={styles.keyword__text}>Keywords</p>
      <input  className={styles.keyword__input} type="text" onChange={onHandleWord} value={value} placeholder="Keyword"></input>
    </div>
  )
}

export default KeyWords;