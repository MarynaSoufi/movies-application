import React from 'react'
import styles from './Genres.module.scss';
import GenresItem from './GenresItem'
const Genres = ({genres}) => {
 
  return (
    <div className={styles.genres}>
      <p className={styles.genres__text}>Genres</p> 
      <ul className={styles.genres__list}>
        {genres && genres.map((g) => <GenresItem key={g.id} genr={g}/>)}
      </ul>
    </div>
  )
}

export default Genres;
