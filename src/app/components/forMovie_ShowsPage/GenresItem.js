import React from 'react'
import styles from './GenresItem.module.scss';

const GenresItem = ({genr}) => {
  const {name, id} = genr;
  return (
    <li className={styles.genres__item} id={id}>
      <button className={styles.genres__item__button} type="checkbox" >{name}</button>
    </li>
  )
}

export default GenresItem;
