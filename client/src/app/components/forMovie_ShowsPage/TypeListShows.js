import React from 'react'
import styles from './TypesList.module.scss';
import classNames from 'classnames';

const TypeListShows = ({handleTypeSelect, type}) => {
  return (
    <div className={styles.types}>
      <ul className={styles.types__list}>
      <li className={classNames(styles.types__list__item, `${type === 'all' ? styles.types__list__item__active :styles.types__list__item}`)} onClick={() => handleTypeSelect(`all`)}>All</li>
        <li className={classNames(styles.types__list__item, `${type === 'tv/popular' ? styles.types__list__item__active :styles.types__list__item}`)} onClick={() => handleTypeSelect(`tv/popular`)}>Popular</li>
        <li  className={classNames(styles.types__list__item, `${type === 'tv/airing_today' ? styles.types__list__item__active :styles.types__list__item}`)} onClick={() => handleTypeSelect(`tv/airing_today`)}>Airing Today</li>
        <li className={classNames(styles.types__list__item, `${type === 'tv/top_rated' ? styles.types__list__item__active :styles.types__list__item}`)}  onClick={() => handleTypeSelect(`tv/top_rated`)}>Top Rated</li>
      </ul>
    </div>
  
  )
}

export default TypeListShows;
