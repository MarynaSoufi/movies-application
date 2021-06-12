import React from 'react'
import styles from './GenresItem.module.scss';
import classNames from 'classnames';
import { useThemeContext } from '../../contexts'

const GenresItem = ({genr, handleCheck, isGenre }) => {
  const {name, id} = genr;
  const {isDarkMode} = useThemeContext();
  return (
    <li className={styles.genres__item} >
      <label className={classNames(`${ !isDarkMode ? (isGenre.includes(id.toString()) ? styles.genres__item__button__active : styles.genres__item__button) :  (isGenre.includes(id.toString()) ? styles.genres__item__button__active__dark : styles.genres__item__button__dark)}`)} for={id}>{name}</label>
      <input  className={styles.genres__item__input} type="checkbox" id={id}  onChange={handleCheck}></input>
    </li>
  )
}

export default GenresItem;
