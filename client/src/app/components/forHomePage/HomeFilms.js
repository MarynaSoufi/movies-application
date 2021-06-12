import React from 'react'
import {Cart} from '../cartForAll'
import styles from './HomeFilms.module.scss'

const HomeFilms = ({title, movie}) => {

  return (
    <div className={styles.film__wrapper}>
      <p className={styles.films__titel}>{title}</p>
      <ul className={styles.films}>
        {movie && movie.map((m, index) => <Cart key={index} film={m}/>)}
      </ul>
    </div>
   
 
  )
}

export default HomeFilms
