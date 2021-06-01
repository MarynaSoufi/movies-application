import React from 'react'
import styles from './TypesList.module.scss';
import requests  from '../../requests/requests'

const TypesList = ({handleTypeSelect}) => {
  
  return (
    <div className={styles.types}>
      <ul className={styles.types__list}>
        <li className={styles.types__list__item} onClick={() => handleTypeSelect(`movie/popular`)}>Popular</li>
        <li className={styles.types__list__item} onClick={() => handleTypeSelect(`movie/upcoming`)}>Upcoming</li>
        <li className={styles.types__list__item}  onClick={() => handleTypeSelect( `movie/top_rated`)}>Top Rated</li>
      </ul>
    </div>
  
  )
}

export default TypesList;
