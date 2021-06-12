import React from 'react'
import styles from './TypesList.module.scss';
import classNames from 'classnames';

const TypesList = ({handleTypeSelect, type}) => {
  console.log(type);
  return (
    <div className={styles.types}>
      <ul className={styles.types__list}> <li className={classNames(styles.types__list__item, `${type === 'all' ? styles.types__list__item__active :styles.types__list__item}`)}onClick={() => handleTypeSelect(`all`)}>All</li>
        <li className={classNames(styles.types__list__item, `${type === 'movie/popular' ? styles.types__list__item__active :styles.types__list__item}`)}onClick={() => handleTypeSelect(`movie/popular`)}>Popular</li>
        <li className={classNames(styles.types__list__item, `${type === 'movie/upcoming' ? styles.types__list__item__active :styles.types__list__item}`)} onClick={() => handleTypeSelect(`movie/upcoming`)}>Upcoming</li>
        <li className={classNames(styles.types__list__item, `${type === 'movie/top_rated' ? styles.types__list__item__active :styles.types__list__item}`)} onClick={() => handleTypeSelect( `movie/top_rated`)}>Top Rated</li>
      </ul>
    </div>
  
  )
}

export default TypesList;
