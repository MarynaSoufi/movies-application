import React from 'react';
import styles from './Types.module.scss';
import classNames from 'classnames';


const Types = ({handleTypeSelect, paramsText, page, type, handleGenreType}) => {
  console.log(type);
  return (
    <div className={styles.types}>
      <ul className={styles.types__list}>
        <li className={classNames(styles.types__list__item, `${type.toString() === `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${paramsText}&page=${page}&include_adult=false`.toString() ? styles.types__list__item__active : styles.types__list__item}`)} onClick={() => handleTypeSelect(`/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${paramsText}&page=${page}&include_adult=false`, `/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)} >Movies</li>
        <li className={classNames(styles.types__list__item, `${type.toString() === `/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}&query=${paramsText}&include_adult=false`.toString() ? styles.types__list__item__active : styles.types__list__item}`)}  onClick={() => handleTypeSelect(`/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}&query=${paramsText}&include_adult=false`, `/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)}>Tv Shows</li>
      </ul>
    </div>
  )
}

export default Types;
