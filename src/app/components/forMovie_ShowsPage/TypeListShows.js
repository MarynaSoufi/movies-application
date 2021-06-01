import React from 'react'
import styles from './TypesList.module.scss';
import requests  from '../../requests/requests'


const TypeListShows = ({handleTypeSelect}) => {
  return (
    <div className={styles.types}>
      <ul className={styles.types__list}>
        <li className={styles.types__list__item} onClick={() => handleTypeSelect(`tv/popular`)}>Popular</li>
        <li className={styles.types__list__item} onClick={() => handleTypeSelect(`tv/airing_today`)}>Airing Today</li>
        <li className={styles.types__list__item}  onClick={() => handleTypeSelect(`tv/top_rated`)}>Top Rated</li>
      </ul>
    </div>
  
  )
}

export default TypeListShows;
