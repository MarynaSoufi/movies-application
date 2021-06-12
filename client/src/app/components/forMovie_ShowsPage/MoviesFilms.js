import React from 'react'
import {Cart} from '../cartForAll'
import styles from './MoviesFilms.module.scss'

const MoviesFilms = ({title, movie, media, score, isGenre, value}) => {
  console.log(movie);
  
  return (
    <div className={styles.film__wrapper}>
      <p className={styles.films__titel}>{title}</p>
      <ul className={styles.films}>
        {movie && movie.filter((m) => (score !== '' ? m.vote_average <= +score+3 && m.vote_average >= +score : m ))
          .filter((m) => isGenre.length !== 0  ? isGenre.some(i => m.genre_ids.some(s=> s.toString() === i.toString())) : m )
          .filter((m) => value !== '' && m.original_title ? m.original_title.toLowerCase().includes(value.toLowerCase()) || m.overview.toLowerCase().includes(value.toLowerCase()): m)
          .filter((m) => value !== '' && m.title ? m.title.toLowerCase().includes(value.toLowerCase()) || m.overview.toLowerCase().includes(value.toLowerCase()) : m)
          .filter((m) => value !== '' && m.original_name ? m.original_name.toLowerCase().includes(value.toLowerCase()) : m)
          .filter((m) => value !== '' && m.name ? m.name.toLowerCase().includes(value.toLowerCase()) : m)
        .map((m, index) => <Cart media={media} key={index} film={m}/>)}
      </ul>
    </div>
   
 
  )
}

export default MoviesFilms
