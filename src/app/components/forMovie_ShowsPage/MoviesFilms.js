import React from 'react'
import {Cart} from '../cartForAll'
import styles from './MoviesFilms.module.scss'

const MoviesFilms = ({title, movie, media}) => {

  return (
    <div className={styles.film__wrapper}>
      <p className={styles.films__titel}>{title}</p>
      <ul className={styles.films}>
        {movie && movie.map((m, index) => <Cart media={media} key={index} film={m}/>)}
      </ul>
    </div>
   
 
  )
}

export default MoviesFilms
