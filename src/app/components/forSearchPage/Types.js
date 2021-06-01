import React from 'react';
import styles from './Types.module.scss';
import requests  from '../../requests/requests'


const Types = ({handleTypeSelect, paramsText, page}) => {
  return (
    <div className={styles.types}>
      <ul className={styles.types__list}>
        <li className={styles.types__list__item} onClick={() => handleTypeSelect(`/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${paramsText}&page=${page}&include_adult=false`)}>Movies</li>
        <li className={styles.types__list__item}  onClick={() => handleTypeSelect(`/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}&query=${paramsText}&include_adult=false`)}>Tv Shows</li>
      </ul>
    </div>
  )
}

export default Types;
